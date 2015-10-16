/**
 * AnswerController
 *
 * @description :: Server-side logic for managing answers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  add: function(req, res) {
    var answer = {
      text: req.body['text'],
      question: req.body['questionId']
    };

    Answer.create(answer, function(err) {
      if(err) {
        console.log(err);
        //return res.serverError();
      }
      res.redirect('/questions/' + req.body['questionId']);
    });
  }

};

