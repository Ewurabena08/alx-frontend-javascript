module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env'];
  // Add more presets, plugins, or other configurations here as needed

  return {
    presets
  };
}

