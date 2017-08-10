var getData = function(){
  return {
    project: [
      {
        title: 'Chat Application',
        description: 'Simple and lightweight chat room where anyone connect share messages',
        link: 'http://github.com/abtuhin',
        tech: ['Javascript', 'Bootstrap', 'Socket IO']
      },
      {
        title: 'My Blog',
        description: 'Personal site and blog',
        link: 'http://github.com/abtuhin',
        tech: ['React JS', 'Bootstrap', 'NodeJS', 'Create react app']
      },
      {
        title: 'Jobkoi',
        description: 'Jobkoi online job portal for searching jobs, developed under the supervision of InfancyIt',
        link: 'http://jobkoi.com',
        tech: ['Angular JS', 'Bootstrap', 'JSP']
      },
      {
        title: 'Finder GPS Tracking',
        description: 'Developed, designed and architectred the fronend of the application as an employee at FINDER',
        link: 'http://dev.finder-lbs.com',
        tech: ['React JS', 'Bootstrap', 'NodeJS', 'Webpack2', 'es6']
      }
    ],
    academic: [
      {
        title: 'Bachelor of Science',
        degree: 'Honors',
        field: 'Computer Science',
        cgpa: 2.93,
        year: 2016,
        image: 'images/sust.jpg',
        institute: "Shahjalal University of Science & Technology, Sylhet"
      },
      {
        title: 'Higher Secondary School Certificate',
        degree: 'HSC',
        field: 'Science',
        cgpa: 5.00,
        year: 2011,
        image: 'images/ju.jpg',
        institute: "Jahangirnagar University School & College, Dhaka"
      },
      {
        title: 'Secondary School Certificate',
        degree: 'SSC',
        field: 'Science',
        cgpa: 5.00,
        year: 2009,
        image: 'images/ju.jpg',
        institute: "Jahangirnagar University School & College, Dhaka"
      }
    ],
  }

}

module.exports = {getData};
