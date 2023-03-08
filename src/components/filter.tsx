import { Modal } from "antd";
import React, { useState } from "react";
import "../style/filter.scss";

const Filter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        id="modal-button"
        style={{ fontSize: "12px" }}
      >
        ORGANIZATION
      </button>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        className="modalStyle"
        style={{ backgroundColor: "" }}
        okButtonProps={{
          children: "Custom Filter",
        }}
        cancelButtonProps={{
          children: "Custom Reset",
        }}
        okText="Filter"
        cancelText="Reset"
        footer={null}
      >
        <form className="modal-div">
          <div className="organization">
            <label htmlFor="" className="orgLabel">
              {" "}
              Organization
            </label>
            <br />
            <select name="cars" id="cars" className="organization-input">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

          <div className="organization">
            <label htmlFor="" className="userLabel">
              {" "}
              Username
            </label>
            <br />
            <input
              type="text"
              id="organ-username"
              name="Organization"
              className="organization-input"
            />
          </div>

          <div className="organization">
            <label htmlFor="" className="emaLabel">
              {" "}
              Email
            </label>
            <br />
            <input
              type="email"
              id="organ-email"
              name="Organization"
              className="organization-input"
            />
          </div>

          <div className="organization">
            <label htmlFor="" className="datLabel">
              Date
            </label>
            <br />
            <input
              type="date"
              name="Organization"
              className="organization-input"
            />
          </div>

          <div className="organization">
            <label htmlFor="" className="phoLabel">
              Phone Number
            </label>
            <br />
            <input
              type="number"
              name="Organization"
              className="organization-input"
            />
          </div>

          <div className="organization">
            <label htmlFor="" className="staLabel">
              Status
            </label>
            <br />
            <select name="cars" id="cars" className="organization-input">
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

          <div className="resFilBnt">
            <button className="resetButton">Reset</button>
            <button className="filterButton" onClick={handleOk}>
              Filter
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default Filter;

// import React from 'react'
// import { Select, Input, Button } from 'antd'
// import type { DatePickerProps } from 'antd';
// import { DatePicker } from 'antd';

// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };
// const onChange: DatePickerProps['onChange'] = (date, dateString) => {
//   console.log(date, dateString);
// };

// const Filter: React.FC = () => {
//   return (
//     <div>
//       <div>
//         <div>Organization</div>
//         <Select
//           defaultValue="lucy"
//           style={{ width: 120 }}
//           onChange={handleChange}
//           options={[
//             { value: 'jack', label: 'Jack' },
//             { value: 'lucy', label: 'Lucy' },
//             { value: 'Yiminghe', label: 'yiminghe' },
//             { value: 'disabled', label: 'Disabled', disabled: true },
//           ]}
//         />
//       </div>
//       <div>
//         <div>Username</div>
//         <Input placeholder="Basic usage" />;
//       </div>
//       <div>
//         <div>Email</div>
//         <Input placeholder="Basic usage" />;
//       </div>
//       <div>
//         <div>Email</div>
//         <DatePicker onChange={onChange} />
//       </div>
//       <div>
//         <div>Phone Number</div>
//         <Input placeholder="Basic usage" />;
//       </div>
//       <div>
//         <div>Status</div>
//         <Select
//           defaultValue="lucy"
//           style={{ width: 120 }}
//           onChange={handleChange}
//           options={[
//             { value: 'jack', label: 'Jack' },
//             { value: 'lucy', label: 'Lucy' },
//             { value: 'Yiminghe', label: 'yiminghe' },
//             { value: 'disabled', label: 'Disabled', disabled: true },
//           ]}
//         />
//       </div>
//       <Button>Default Button</Button>
//       <Button type="primary">Primary Button</Button>
//     </div>
//   )
// }

// export default Filter;
