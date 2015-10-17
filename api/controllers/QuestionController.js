/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function (req, res) {
    Question.find()
      .sort('createdAt DESC')
      .populateAll()
      .exec(function (err, questions) {
        if (err) {
          return res.serverError();
        }

        if(_.contains(['answered', 'unanswered'], req.query['type'])) {
          questions = _.filter(questions, function(q) {
            if(req.query['type'] == 'answered') {
              return q['answers'].length > 0;
            } else {
              return q['answers'].length == 0;
            }
          });
        }

        res.view({
          questions: questions,
          type: req.query['type']
        });

      });
  },

  view: function (req, res) {
    Question.findOne({
      id: req.params['questionId']
    }).populate('answers').exec(function (err, question) {
      if (err) {
        return res.serverError();
      }
      if (!question) {
        return res.notFound();
      }
      res.view({
        q: question
      });
    });
  },

  post: function (req, res) {
    var question = {
      title: req.body['title'],
      text: req.body['text']
    };

    var user = {
      username: req.body['username']
    };

    User.findOrCreate(user, user).exec(function (err, user) {
      question['author'] = user['id'];

      Question.create(question, function (err, createdQuestion) {
        if (err) {
          console.log(err);
          //return res.serverError();
        }
        res.redirect('/questions/' + createdQuestion['id']);
      });

    });
  }
};

