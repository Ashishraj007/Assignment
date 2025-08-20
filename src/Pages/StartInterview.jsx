import React, { useState } from "react";
import {
  FaUser,
  FaBriefcase,
  FaClock,
  FaPaperPlane,
  FaStickyNote,
  FaTrash,
  FaEdit,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

const StartInterview = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // List of candidates
  const [candidates, setCandidates] = useState([
    {
      name: "Ashish Srivastava",
      role: "Frontend Developer",
      experience: "3 Years Experience",
    },
  ]);

  // Temporary form inputs
  const [form, setForm] = useState({
    name: "",
    role: "",
    experience: "",
  });

  // Edit mode state
  const [editIndex, setEditIndex] = useState(null);
  const [showFormMobile, setShowFormMobile] = useState(false);

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitCandidate = () => {
    if (form.name && form.role && form.experience) {
      if (editIndex !== null) {
        // Update existing candidate
        const updated = [...candidates];
        updated[editIndex] = form;
        setCandidates(updated);
        setEditIndex(null);
      } else {
        // Add new candidate
        setCandidates([...candidates, form]);
      }
      setForm({ name: "", role: "", experience: "" }); // reset form
      setShowFormMobile(false); // close on submit in mobile
    }
  };

  const handleDelete = (index) => {
    setCandidates(candidates.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setForm(candidates[index]);
    setEditIndex(index);
    setShowFormMobile(true);
  };

  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col md:flex-row">
      {/* Video Panel — First on mobile, center on desktop */}
      <div className="order-1 md:order-2 w-full md:w-2/4 flex items-center justify-center bg-gray-200 p-3">
        {/* Mobile: 16:9 ratio | Desktop: Full height */}
        <div className="w-full md:h-full bg-black rounded-lg flex items-center justify-center text-white shadow-md aspect-video md:aspect-auto">
          <span className="text-lg">🎥 Video Stream Placeholder</span>
        </div>
      </div>

      {/* Candidates Panel — Second on mobile, left on desktop */}
      <div className="order-2 md:order-1 w-full md:w-1/4 bg-white p-4 border-r shadow-md flex flex-col relative overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Candidate Details</h2>

        {/* Mobile Add Button */}
        <div className="md:hidden mb-3">
          <button
            onClick={() => setShowFormMobile(!showFormMobile)}
            className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-lg w-full justify-center"
          >
            {showFormMobile ? (
              <>
                <FaTimes /> Close Form
              </>
            ) : (
              <>
                <FaPlus /> Add Candidate
              </>
            )}
          </button>
        </div>

        {/* Candidate Cards */}
        <div className="flex flex-col gap-4 mb-20">
          {candidates.map((cand, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-3 shadow-sm bg-gray-50 relative"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaUser className="text-blue-500" />
                <span className="font-medium">{cand.name}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <FaBriefcase className="text-green-500" />
                <span>{cand.role}</span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <FaClock className="text-orange-500" />
                <span>{cand.experience}</span>
              </div>

              {/* Actions */}
              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => handleEdit(idx)}
                  className="p-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(idx)}
                  className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Candidate Form */}
        <div
          className={`${
            showFormMobile ? "block" : "hidden"
          } md:block absolute md:relative bottom-0 left-0 right-0 p-3 bg-white border-t shadow-md`}
        >
          <h1 className="text-lg font-bold mb-2">
            {editIndex !== null ? "Edit Candidate" : "Add Candidate"}
          </h1>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="border p-2 mb-2 w-full rounded"
            placeholder="Enter Name"
          />
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={handleInputChange}
            className="border p-2 mb-2 w-full rounded"
            placeholder="Enter Role"
          />
          <input
            type="text"
            name="experience"
            value={form.experience}
            onChange={handleInputChange}
            className="border p-2 mb-2 w-full rounded"
            placeholder="Enter Experience"
          />
          <button
            onClick={handleSubmitCandidate}
            className="bg-blue-500 w-full py-2 rounded-lg text-white font-bold hover:bg-blue-600"
          >
            {editIndex !== null ? "Update" : "Submit"}
          </button>
        </div>
      </div>

      {/* Chat Panel — Third on mobile, right on desktop */}
      <div className="order-3 md:order-3 w-full md:w-1/4 bg-white p-4 border-l shadow-md flex flex-col -mt-8 z-1 md:mt-0 ">
        <h2 className="text-xl font-bold mb-4 ">Chat / Notes</h2>
        <div className="flex-1 overflow-y-auto mb-3 border rounded-lg p-2 bg-gray-50">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-sm">No messages yet...</p>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className="p-2 mb-2 bg-blue-100 rounded-lg">
                {msg}
              </div>
            ))
          )}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            className="flex-1 border rounded-lg px-3 py-2 text-sm"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            onClick={sendMessage}
          >
            <FaPaperPlane />
          </button>
        </div>

        <div>
          <h3 className="font-semibold flex items-center gap-2 mb-2">
            <FaStickyNote /> Notes
          </h3>
          <textarea
            className="w-full border rounded-lg p-2 text-sm"
            rows={4}
            placeholder="Write notes here..."
          ></textarea>
          <button className="mt-2 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Save Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartInterview;
