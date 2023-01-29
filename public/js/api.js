import fs from 'fs';
import path, { resolve } from 'path';
import * as matter from 'gray-matter';

import { remark } from 'remark';
import html from 'remark-html';



const getIdFromFilename = (filename) => {
    let filename_arr = filename.split('.');
    return filename_arr[0];
}


const blogpath = path.join(process.cwd(), 'content');


function getData(){

        return new Promise((resolve, reject) => {
            const filenames = fs.readdirSync(blogpath);

            const filecontents = filenames.map(
                    filename => {
                        const file_path = path.join(blogpath, filename);
                        const file_content = fs.readFileSync(file_path, 'utf-8');

                        const file_data = matter(file_content).data;
                        return {
                            id: getIdFromFilename(filename),
                            ...matter(file_content).data
                        }
                    });

           setTimeout(()=>resolve(filecontents), 1000) ;
 

        });
  
          
}

async function getSinglePostData(id){

    
        const post = path.join(blogpath, `${id}.md`)
        const file_content = fs.readFileSync(post, 'utf-8');

        const matterResult = matter(file_content);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    const contentData = matterResult.data;
    
 
    
    // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    contentData
  };

}


/* MUST return an array of objects */
 // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]

function getBlogPathIDs(){

 
        const filenames = fs.readdirSync(blogpath);

        const filecontents = filenames.map(
                filename => {
                    const file_path = path.join(blogpath, filename);
                    const file_content = fs.readFileSync(file_path, 'utf-8');

                 
                    return {
                       params: {
                        id: filename.replace(/\.md$/, ''),
                       }
                    }
         });

       return filecontents;


   
      
}


export {getData,getSinglePostData,getBlogPathIDs}
