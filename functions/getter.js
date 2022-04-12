// import sanityClient from "@sanity/client";
// import imageUrlBuilder from '@sanity/image-url';
require('dotenv').config()
const sanityClient = require('@sanity/client');
const imageUrlBuilder = require('@sanity/image-url');

const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    projectId: 'akyme2fr',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

const urlFor = (source) => builder.image(source).url();

exports.handler = async function (event, context) {
    const query = event.queryStringParameters.query;
    console.log(`query: ${query}`)
    const data = await client.fetch(query).then((results) => {
        const allData = results.map((item) => {
            console.log(item)
            const output = item
            const image = item.imgUrl ? item.imgUrl.asset._ref : null;
            console.log(image)
            if (image) {
                output.image = urlFor(item.imgUrl)
                console.log(output.image)
            }
            return output;
        })
        return allData;
    })

    console.log(data)
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }

// exports.handler = async (event, context) => {
//     return {
//       statusCode: 200,
//       body: "Hello, World"
//     };
//   };
}
  