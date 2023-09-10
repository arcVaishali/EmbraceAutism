import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Confetti from 'react-confetti';

const CourseCompletion = () => {
    const { user } = useAuth0(); 

    return (
        <div className="bg-gradient-to-r from-[#12E0B7] to-[#07F76B]">
            <div className="max-w-2xl mx-auto py-8">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                    Congratulations, {user.name}!
                </h1>
                <div className="mt-6">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Course Completion Certificate
                        </h2>
                        <Confetti
                            width={window.innerWidth}
                            height={window.innerHeight}
                        />
                        <p className="mt-4 text-lg text-gray-600">
                            This is to certify that {user.name} has successfully completed the course.
                        </p>
                        <div className="mt-6">
                        </div>
                        <div className="mt-6 flex justify-center">
                            <a
                                href={`https://twitter.com/intent/tweet?text=I%20just%20completed%20a%20course%20on%20XYZ%20and%20earned%20a%20certificate!%20%23CourseCompletion`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md bg-[#1DA1F2] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1A91DA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1DA1F2]"
                            >
                                Share on Twitter
                            </a>
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 rounded-md bg-[#1877F2] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1666C6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1877F2]"
                            >
                                Share on Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCompletion;
