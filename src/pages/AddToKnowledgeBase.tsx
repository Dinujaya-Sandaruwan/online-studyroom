import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, LinkIcon, X, Search, CopyPlus } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

interface Quiz {
  id: string;
  title: string;
}

const DocumentUpload: React.FC = () => {
  const [topic, setTopic] = useState("");
  const [selectedQuizzes, setSelectedQuizzes] = useState<Quiz[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isFocusedSearch, setIsFocusedSearch] = useState(false);

  // Dummy quiz data
  const dummyQuizzes: Quiz[] = [
    { id: "1", title: "What does IP stand for?" },
    { id: "2", title: "Introduction to React Hooks" },
    { id: "3", title: "JavaScript Basics Quiz" },
    { id: "4", title: "CSS Flexbox Challenge" },
    { id: "5", title: "Python Data Structures" },
    { id: "6", title: "Web Security Fundamentals" },
  ];

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "text/plain": [".txt"],
      "application/msword": [".doc", ".docx"],
    },
  });

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleQuiz = (quiz: Quiz) => {
    if (selectedQuizzes.find((q) => q.id === quiz.id)) {
      setSelectedQuizzes((prev) => prev.filter((q) => q.id !== quiz.id));
    } else {
      setSelectedQuizzes((prev) => [...prev, quiz]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!topic && selectedQuizzes.length === 0) {
      toast.error("Please provide either a topic or link at least one quiz!");
      return;
    }

    if (files.length === 0) {
      toast.error("Please upload at least one file!");
      return;
    }

    toast.success("Documents uploaded successfully! 🎉");

    // Reset form
    setTopic("");
    setSelectedQuizzes([]);
    setFiles([]);
  };

  const filteredQuizzes = dummyQuizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="document-upload">
      <NavBar />

      <main className="document-upload__main">
        <div className="document-upload__container">
          <div className="document-upload__header">
            <h1 className="document-upload__title">
              Upload Learning Materials
            </h1>
            <p className="document-upload__subtitle">
              Share your knowledge with the community!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="document-upload__form">
            {/* Topic Input */}
            <div className="form-group">
              <label htmlFor="topic">Topic (Optional)</label>
              <input
                type="text"
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Computer Networks, Web Development"
                className="form-input"
              />
            </div>

            {/* Quiz Selection */}
            <div className="form-group">
              <label>Link to Quizzes (Optional)</label>
              <div className="quiz-search">
                <Search size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search quizzes..."
                  className="quiz-search__input"
                  onFocus={() => setIsFocusedSearch(true)}
                />
              </div>

              {isFocusedSearch && (
                <div className="quiz-list">
                  {filteredQuizzes.map((quiz) => (
                    <div
                      key={quiz.id}
                      className={`quiz-item ${
                        selectedQuizzes.find((q) => q.id === quiz.id)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => toggleQuiz(quiz)}
                    >
                      <LinkIcon size={16} />
                      <span>{quiz.title}</span>
                      {selectedQuizzes.find((q) => q.id === quiz.id) && (
                        <div className="quiz-item__check">✓</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* File Upload */}
            <div className="form-group">
              <label>Upload Documents</label>
              <div
                {...getRootProps()}
                className={`dropzone ${isDragActive ? "active" : ""}`}
              >
                <input {...getInputProps()} />
                <Upload size={32} />
                <p>Drag & drop files here, or click to select files</p>
                <span className="dropzone__hint">
                  Supported formats: PDF, DOC, DOCX, TXT
                </span>
              </div>

              {files.length > 0 && (
                <div className="file-list">
                  {files.map((file, index) => (
                    <div key={index} className="file-item">
                      <span>{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="file-item__remove"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              <CopyPlus />
              Upload to Knowledge Base
            </button>
          </form>
        </div>
      </main>

      <Footer />
      <ToastContainer position="bottom-right" theme="colored" />
    </div>
  );
};

export default DocumentUpload;
