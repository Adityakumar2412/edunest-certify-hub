
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  language: string;
  image: string;
  isEnrolled?: boolean;
}

const CourseCard = ({ id, title, description, language, image, isEnrolled }: CourseCardProps) => {
  return (
    <Card className="course-card h-full flex flex-col">
      <CardHeader>
        <div className="course-image-container mb-3">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="course-image"
              onError={(e) => {
                // If image fails to load, replace with language placeholder
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const div = document.createElement('div');
                  div.className = 'language-placeholder';
                  div.innerText = language;
                  parent.appendChild(div);
                }
              }}
            />
          ) : (
            <div className="language-placeholder">
              {language}
            </div>
          )}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/courses/${id}`} className="w-full">
          <Button variant={isEnrolled ? "outline" : "default"} className="w-full">
            {isEnrolled ? "Continue Learning" : "View Course"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
