module.exports = {
  purge: ['./components/*.tsx', './pages/*.tsx', './pages/**/*.tsx'],
  eslint: {
    // TODO: Sort out the ESlint issues
    ignoreDuringBuilds: true,
  },
};
