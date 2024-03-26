import React, { useState } from "react";

const ManageNews = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleViewClick = () => {
    setShowPreview(true);
  };

  const handleCloseClick = () => {
    setShowPreview(false);
  };

  return (
    <div>
      {/* table  */}
      <div>
        <table>
          <thead>
            <td>Title</td>
            <td>Category</td>
            <td>Create Date</td>
            <td>Status</td>
            {/* status like publish news or draft */}
            <td>Action</td>
          </thead>
          <tbody>
            <td>Top 5 News</td>
            <td>School Bussiness</td>
            <td>10/12/2023</td>
            <td>Publish | Draft</td>
            <td className="">
              <button className="bg-gray-400  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  mr-2  ">
                Edit
              </button>
              <button className="bg-red-500   hover:bg-red-700 text-white font-bold py-2 px-4 rounded  mr-2 ">
                Delete
              </button>
              <button
                onClick={handleViewClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View
              </button>
            </td>
          </tbody>
        </table>
        <div>
          {showPreview && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
                <h2 className="text-xl font-bold mb-4">Article Preview</h2>
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-bold">Article 1</h3>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus nihil quam, perferendis natus quaerat laborum illo
                    quis nam possimus, at maxime vitae fuga itaque nesciunt!
                    Quas officia, molestiae officiis quis, culpa reprehenderit
                    voluptates quam, hic veniam ex animi rem nostrum id nobis
                    perferendis. Odit aliquam veniam ab facilis deleniti
                    corporis.
                  </p>
                  <p>Author:Bhau Singh</p>
                  <h5>Category : Bussiness</h5>
                </div>

                <button
                  onClick={handleCloseClick}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Close Preview
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageNews;
