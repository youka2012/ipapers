// 获得mongo实例
var User = require("./config/schema.user");
var Paper = require("./config/schema.paper");
var Answer = require("./config/schema.answer");

module.exports = {
  getActivePaperByCode(_code, _callBack) {
    Paper.findOne({ code: _code, status: "ON" }, function(err, data) {
      _callBack(data);
    });
  },
  getUserByUserName(_userName, _callBack) {
    User.findOne({ name: _userName }, function(err, data) {
      _callBack(data);
    });
  },
  getPapersByUserName(_userName, _callBack) {
    Paper.find(
      { acount: _userName },
      "code acount status title dateLine createDate creator contact description expect",
      function(err, data) {
        _callBack(data);
      }
    );
  },
  getPaperIdsByUserName(_userName, _callBack) {
    Paper.find({ acount: _userName }, "_id", function(err, data) {
      _callBack(data);
    });
  },
  setPaperStatusByPaperId(_paperId, _status, _callBack) {
    var conditions = { _id: _paperId };
    var update = { $set: { status: _status } };
    Paper.update(conditions, update, function(error) {
      if (error) {
        _callBack(0);
      } else {
        _callBack(1);
      }
    });
  },
  deletePaperByPaperId(_paperId, _callBack) {
    var conditions = { _id: _paperId };
    Paper.remove(conditions, function(error) {
      if (error) {
        _callBack(0);
      } else {
        _callBack(1);
      }
    });
  },
  addPaper(_json, _callBack) {
    Paper.create(_json, function(error, doc) {
      if (error) {
        _callBack(0);
      } else {
        _callBack(1);
      }
    });
  },
  getPaperDetailByPaperId(_paperId, _callBack) {
    Paper.findOne({ _id: _paperId }, function(err, data) {
      _callBack(data);
    });
  },
  getPaperAnswersByPaperId(_paperId, _callBack) {
    Answer.find({ _id: _paperId }, function(err, data) {
      _callBack(data);
    });
  },
  deleteAnswerByAnswerId(_answerId, _callBack) {
    var conditions = { _id: _answerId };
    Answer.remove(conditions, function(error) {
      if (error) {
        _callBack(0);
      } else {
        _callBack(1);
      }
    });
  },
  getPaperIdByPaperCode(_paperCode,_callBack) {
    Paper.findOne({ code: _paperCode },'_id', function(err, data) {
        _callBack(data);
      });
  },
  addAnswer(_json, _callBack) {
    Answer.create(_json, function(error, doc) {
        if (error) {
          _callBack(0);
        } else {
          _callBack(1);
        }
      });
  }
};