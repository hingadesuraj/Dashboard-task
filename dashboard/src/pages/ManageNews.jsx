import React from 'react'

const ManageNews = () => {
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
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>View</button>
                </td>
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageNews