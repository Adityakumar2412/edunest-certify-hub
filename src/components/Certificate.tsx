
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Course } from "@/contexts/CourseContext";
import { Download } from "lucide-react";

interface CertificateProps {
  course: Course;
  score: number;
}

const Certificate = ({ course, score }: CertificateProps) => {
  const { user } = useAuth();
  const certificateRef = useRef<HTMLDivElement>(null);
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleDownload = () => {
    // This is a placeholder for certificate download
    // In a real app, we would use html2canvas or similar to generate a PDF
    alert("Certificate download functionality would be implemented here with a proper PDF generation library.");
  };

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4 flex justify-end">
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download size={18} />
          Download Certificate
        </Button>
      </div>

      <div
        ref={certificateRef}
        className="certificate border-8 border-double border-blue-200 p-10 bg-white shadow-lg"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">Education Centre</h1>
          <h2 className="text-xl text-gray-500">Certificate of Completion</h2>
        </div>

        <div className="my-10 text-center">
          <p className="text-lg">This is to certify that</p>
          <h2 className="text-3xl font-bold my-4 text-gray-800">{user.name}</h2>
          <p className="text-lg">
            has successfully completed the course
            <br />
            <span className="text-2xl font-semibold my-2 inline-block text-blue-600">
              {course.title}
            </span>
            <br />
            with a score of <span className="font-bold">{score}%</span>
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8">
          <div className="text-center">
            <div className="h-px w-48 bg-gray-400 mx-auto mb-2"></div>
            <p className="certificate-signature">Aditya Kumar</p>
            <p className="text-sm text-gray-600">Director, Education Centre</p>
          </div>
          <div className="text-center">
            <div className="h-px w-48 bg-gray-400 mx-auto mb-2"></div>
            <p className="certificate-signature">Lekh Raj Soni</p>
            <p className="text-sm text-gray-600">Co-Director, Education Centre</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">Issued on {currentDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
