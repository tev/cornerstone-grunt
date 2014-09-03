module.exports = function(){
  return {
    "hub": {
      "moduleDist": {
        "src": ["<%= hubModuleSrc %>"],
        "tasks": ["dist"]
      }
    }
  };
};