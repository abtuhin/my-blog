var getData = function(){
  return {
    project: [
      {
        title: 'Chat Application',
        description: 'Simple and lightweight chat room where anyone connect share messages',
        link: 'https://github.com/abtuhin/simple-chat-app',
        tech: ['Javascript', 'Bootstrap', 'Socket IO']
      },
      {
        title: 'My Blog',
        description: 'Personal site and blog',
        link: 'https://github.com/abtuhin/my-blog',
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
      },
      {
        title: 'InfancyIt Single Page UI',
        description: 'Single page ui for company site. This is developed at InfancyIt',
        link: 'http://infancyit.com/tuhin/infancy/main.php#/',
        tech: ['Angular JS', 'ui-router']
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
    experience: [
      {
        image: 'images/ju.jpg',
        company: 'Finder GPS Tracking Service',
        position: 'Frontend Developer',
        from: 'February, 2017',
        to: 'Present'
      },
      {
        image: 'images/sust.jpg',
        company: 'InfancyIt',
        position: 'Frontend Designer & Developer (part-time)',
        From: 'October, 2015',
        to: 'October, 2016'
      }
    ],
    achievement: [

    ]
  }

}

module.exports = {getData};
