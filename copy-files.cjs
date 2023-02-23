const fs = require('fs');
const path = require('path');

const componentsPath = path.join(__dirname, 'src/components');
fs.readdir(componentsPath, (error, componentsFiles) => {
	if (error) console.log(error)
	componentsFiles.forEach(componentDirectory => {
            if (!componentDirectory.includes('.')) {
                const componentPath = path.join(__dirname, 'src/components/' + componentDirectory + '/');
                fs.readdir(componentPath, (error, componentFiles) => {
                    if (error) console.log(error)                                                                                                                                                              
                    componentFiles.forEach(componentFile => {            
                        if(componentFile.includes('.css')) {                
                           const componentPath = path.join(__dirname, 'src/components/' + componentDirectory + '/' + componentFile);
                           const distPath = path.join(__dirname, 'dist/components/' + componentDirectory + '/' + componentFile);            
                        
                           fs.copyFile(componentPath, distPath, (err) => {
                              if (err) throw err;
                              console.log(componentFile + ' was copied.');
                           });}
                    })
                });                             
            }
        })
});

