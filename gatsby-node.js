const Butter = require('buttercms')
const butter = Butter('d1e76c7d753ccb2484c4cc24d3c706d39cd23bc9')

butter.content.retrieve(['aboutMe', 'toolbox', 'projects', 'socialLinks'])
  .then((res) => console.log(res.data.data));


  const getAllData = async () => 
    await butter.content.retrieve(['aboutMe', 'toolbox', 'projects', 'socialLinks'])
            .then(response => data = response.data.data)
            .catch(err => console.log(err));
    
exports.createPages = async ({ actions: { createPage } }) => {
    await getAllData()    

    // Create a page and pass the data.
    createPage({
        path: `/`,
        component: require.resolve('./src/templates/home.js'),
        context: { data }
    });
};