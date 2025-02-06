import React, { useState } from 'react';
import { PlusCircle, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createCourse } from '../backendApi/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Createcourses = () => {
    const [courseData, setCourseData] = useState({
        courseName: "",
        price: "",
        link: "",
        about: "",
        courseTime: "",
    })

    const navigate = useNavigate();

    const courseCreated = async () => {
        try {
            const response = await createCourse(courseData);
            toast.success(response.message, { position: "top-center", autoClose: 1000 });
            setTimeout(() => navigate("/"), 2000);
        } catch (error) {
            toast.error("Course registration failed!!", { position: "top-center", autoClose: 1000 });
            throw error;
        }
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h1 className="text-2xl font-bold text-white mb-6">Create New Course</h1>

                <form className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300">
                                Course Title
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-indigo-500 focus:ring-indigo-500"
                                required
                                onChange={(e) => setCourseData({ ...courseData, courseName: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300">
                                    Price(&#8377;)
                                </label>
                                <input
                                    type="number"
                                    className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                    onChange={(e) => setCourseData({ ...courseData, price: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300">
                                    Duration (hours)
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g., 32h"
                                    className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                    onChange={(e) => setCourseData({ ...courseData, courseTime: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300">
                                Course Image URL
                            </label>
                            <input
                                type="url"
                                name="image"
                                className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-indigo-500 focus:ring-indigo-500"
                                required
                                onChange={(e) => setCourseData({ ...courseData, link: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300">
                                Course Description
                            </label>
                            <textarea
                                name="description"
                                rows={4}
                                className="mt-1 block w-full rounded-lg border border-gray-600 bg-gray-700 px-3 py-2 text-white focus:border-indigo-500 focus:ring-indigo-500"
                                required
                                onChange={(e) => setCourseData({ ...courseData, about: e.target.value })}
                            />
                        </div>
                    </div>
                </form>
                <button
                    onClick={courseCreated}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer mt-5"
                >
                    <Upload className="h-5 w-5 mr-2" />
                    Create Course
                </button>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Createcourses;
