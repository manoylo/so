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
      .exec(function (err, questions) {
        if (err) {
          return res.send(500);
        }
        res.view({
          questions: questions
        });
      });
  },

  view: function (req, res) {
    Question.findOne({
      id: req.params['questionId']
    }).exec(function (err, question) {
      if (err) {
        return res.send(500);
      }
      if(!question) {
        return res.notFound();
      }
      res.view({
        q: question
      });
    });
  }
};

