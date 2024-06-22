import React, { useState } from 'react';

const CreateGroup: React.FC<any> = ({ onSelect, onClose }) => {
  const [groupName, setGroupName] = useState('');

  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform validation logic here
    if (password !== verifyPassword) {

      alert('Passwords do not match');
      return;
    }
    // Perform other submission logic here
    // ...
    const groupData = {
      groupName,
      password,
    };
    onSelect(groupData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-neutral-800 p-4 rounded-lg h-[30vh] max-h-full overflow-none">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-white text-xl">Create Group</h2>
          <button onClick={onClose} className="text-white">x</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="groupName" className="text-white">Group Name</label>
            <input
              type="text"
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full p-2 rounded bg-neutral-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-white">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-neutral-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="verifyPassword" className="text-white">Verify Password</label>
            <input
              type="password"
              id="verifyPassword"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              className="w-full p-2 rounded bg-neutral-700 text-white"
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-2 rounded bg-neutral-700 text-white">Cancel</button>
            <button type="submit" className="px-4 py-2 rounded bg-primary text-white">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
