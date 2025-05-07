
import { useCourses } from "@/contexts/CourseContext";
import { useAuth } from "@/contexts/AuthContext";
import CourseCard from "@/components/CourseCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Loader } from "lucide-react";

const Courses = () => {
  const { courses, loading } = useCourses();
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-blue-600 text-white py-16">
          <div className="edu-container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">All Courses</h1>
            <p className="text-xl">
              Browse our collection of free programming courses
            </p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="edu-container mx-auto">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader className="h-12 w-12 animate-spin text-blue-600 mb-4" />
                <p className="text-lg">Loading courses...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    title={course.title}
                    description={course.description}
                    language={course.language}
                    image={course.image}
                    isEnrolled={user?.enrolledCourses.includes(course.id)}
                  />
                ))}
              </div>
            )}
            
            {!loading && courses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No courses available at the moment.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
