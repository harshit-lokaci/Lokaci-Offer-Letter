// const { default: Image } = require("next/image")
// const { default: Link } = require("next/link")
// const { FaLinkedin, FaGithub, FaTwitter } = require("react-icons/fa")

// const Team = () => {
//     return (
//         <>
//             <section className="bg-gray-900 px-4 sm:px-8 lg:px-28">
//                 <div className="container mx-auto py-12">
//                     {/* Heading */}
//                     <h1 className="font-bold text-center text-gray-800 text-3xl sm:text-4xl lg:text-5xl dark:text-white">
//                         Meet the <span className="text-blue-600">Team</span>
//                     </h1>

//                     <p className="max-w-2xl mx-auto mt-4 sm:mt-6 text-center text-gray-500 dark:text-gray-300 text-sm sm:text-base">
//                         We’re building the future of hiring with simple, secure, and smart
//                         offer letter creation. Every offer letter crafted with our platform
//                         is backed by this passionate team.
//                     </p>

//                     {/* Grid */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-12">

//                         {/* Reusable Card */}
//                         {[
//                             { name: "Karan", role: "HR Specialist" },
//                             { name: "Anil", role: "Document Automation Engineer" },
//                             { name: "Anuj", role: "Product Designer" },
//                             { name: "Naman", role: "Customer Success Lead" },
//                         ].map((member, i) => (
//                             <div
//                                 key={i}
//                                 className="p-6 sm:p-8 lg:p-10 border rounded-xl transition-all duration-300 transform hover:border-transparent hover:shadow-lg hover:bg-blue-600 group dark:border-gray-700"
//                             >
//                                 <div className="flex flex-col sm:flex-row sm:items-center">
//                                     <Image
//                                         className="flex-shrink-0 object-cover w-20 h-20 sm:w-24 sm:h-24 mx-auto sm:mx-0 rounded-full ring-4 ring-gray-300"
//                                         src="/images/aboutImage.jpg"
//                                         alt={member.role}
//                                         width={96}
//                                         height={96}
//                                     />
//                                     <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
//                                         <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-white group-hover:text-white">
//                                             {member.name}
//                                         </h1>
//                                         <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-300 group-hover:text-gray-200">
//                                             {member.role}
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-300 group-hover:text-gray-200 text-center sm:text-left">
//                                     {member.role === "HR Specialist" &&
//                                         "Ensuring compliance and precision in every offer letter we generate."}
//                                     {member.role === "Document Automation Engineer" &&
//                                         "Builds the technology that automates offer letter generation securely and fast."}
//                                     {member.role === "Product Designer" &&
//                                         "Creates intuitive experiences so HR teams can generate offers effortlessly."}
//                                     {member.role === "Customer Success Lead" &&
//                                         "Helps clients onboard smoothly and ensures every letter meets expectations."}
//                                 </p>

//                                 <div className="flex justify-center sm:justify-start mt-4 space-x-4 text-lg">
//                                     <Link
//                                         href="/"
//                                         className="text-gray-600 dark:text-gray-300 group-hover:text-white"
//                                     >
//                                         <FaLinkedin />
//                                     </Link>
//                                     <Link
//                                         href="/"
//                                         className="text-gray-600 dark:text-gray-300 group-hover:text-white"
//                                     >
//                                         <FaGithub />
//                                     </Link>
//                                     <Link
//                                         href="/"
//                                         className="text-gray-600 dark:text-gray-300 group-hover:text-white"
//                                     >
//                                         <FaTwitter />
//                                     </Link>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Team
