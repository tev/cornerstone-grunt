module.exports = function(){
  return {
    "sass" : {
      "dev": {
        "options" : {
          "style" : "nested",
          "precision" : 5
        },
        "files": [{
          "expand": true,
          "cwd": "<%= module %>css/sass",
          "src": ["*.scss"],
          "dest": "<%= module %>css/<%= sassOut %>",
          "ext": ".css"
        }]
      },
      "prod": {
        "options" : {
          "style" : "compressed",
          "precision" : 5
        },
        "files": [{
          "expand": true,
          "cwd": "<%= module %>css/sass",
          "src": ["*.scss"],
          "dest": "<%= module %>css/<%= sassOut %>",
          "ext": ".css"
        }]
      }
    }
  };
};