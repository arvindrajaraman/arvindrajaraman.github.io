import React from 'react';
import './Teaching.css';
import TeachingItem from './TeachingItem';

const Teaching = () => {
  const teachingItems = [
    {
      course: 'CS 189: Introduction to Machine Learning',
      image: '/images/cs189.png',
      positions: [
        {
          role: 'Head Teaching Assistant',
          term: 'Fall 2023',
          link: 'https://eecs189.org/',
          instructors: [
            { name: 'Jitendra Malik', link: 'https://people.eecs.berkeley.edu/~malik/' },
            { name: 'Jennifer Listgarten', link: 'http://www.jennifer.listgarten.com/' }
          ]
        },
        {
          role: 'Head Teaching Assistant',
          term: 'Spring 2023',
          link: 'https://people.eecs.berkeley.edu/~jrs/189s23/',
          instructors: [
            { name: 'Jonathan Shewchuk', link: 'https://people.eecs.berkeley.edu/~jrs/' }
          ]
        },
        {
          role: 'Teaching Assistant',
          term: 'Fall 2022',
          link: 'https://people.eecs.berkeley.edu/~jrs/189s23/',
          instructors: [
            { name: 'Jitendra Malik', link: 'https://people.eecs.berkeley.edu/~malik/' },
            { name: 'Jennifer Listgarten', link: 'http://www.jennifer.listgarten.com/' }
          ]
        }
      ]
    },
    {
      course: 'CS 188: Introduction to Artificial Intelligence',
      image: '/images/cs188.png',
      positions: [
        {
          role: 'Head Teaching Assistant',
          term: 'Summer 2022',
          link: 'http://inst.eecs.berkeley.edu/~cs188/su22',
          instructors: [
            { name: 'Yanlai Yang' },
            { name: 'Angela Liu' }
          ]
        },
        {
          role: 'Teaching Assistant',
          term: 'Spring 2022',
          link: 'http://inst.eecs.berkeley.edu/~cs188/sp22',
          instructors: [
            { name: 'Stuart Russell', link: 'https://people.eecs.berkeley.edu/~russell/' },
            { name: 'Dawn Song', link: 'https://dawnsong.io/' }
          ]
        }
      ]
    },
    {
      course: 'CS 70: Discrete Mathematics and Probability Theory',
      image: '/images/cs70.png',
      positions: [
        {
          role: 'Academic Intern',
          term: 'Spring 2021',
          link: 'https://www.sp21.eecs70.org/',
          instructors: [
            { name: 'Shyam Parekh', link: 'https://www2.eecs.berkeley.edu/Faculty/Homepages/shyam.html' },
            { name: 'Satish Rao', link: 'https://www2.eecs.berkeley.edu/Faculty/Homepages/rao.html' }
          ]
        }
      ]
    }
  ];

  return (
    <section id="teaching" className="section teaching">
      <h2 className="section-title">Teaching</h2>
      <p className="section-intro">I love teaching and was involved in running large undergraduate classes at Berkeley (max of 900 students and 30 course staff in one semester!).</p>
      <p className="section-intro">I was involved in high-level decisions around curriculum/policies, content development, grading, office hours, and occasionally a lecture or two!</p>
      
      <div className="teaching-list">
        {teachingItems.map((item, index) => (
          <TeachingItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Teaching;

