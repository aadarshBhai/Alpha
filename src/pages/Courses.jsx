import React from 'react';
import Section from '../components/Section';
import { getCourses } from '../data';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const courses = getCourses();

  return (
    <Section
      id="courses"
      title="Academic Programs"
      subtitle="Excellence-driven coaching batches for school students and competitive exam aspirants."
    >
      <div className="grid-2">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </Section>
  );
};

export default Courses;
