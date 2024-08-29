import React from 'react'
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/product-selection');
  };
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/shiny-focus-light-empty-background-design_1017-52418.jpg?t=st=1724892611~exp=1724896211~hmac=262353b5a0ddf66512064394f59ffd34b429b2b73aec3f4e4ef3644370d6fbcb&w=1800')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Conference<br />Expense Planner</h1>
        <p className="text-md md:text-lg mb-8 text-white-400">Plan your next major event with us!</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded"
          onClick={handleGetStarted}>Get Started</button>
      </div>
      <div className="z-10 max-w-3xl text-white text-center mt-8 px-4 md:px-4">
        <p className="text-md md:text-lg mb-4">
          Welcome to BudgetEase Solutions, your trusted partner in simplifying budget management and financial solutions.
          At BudgetEase, we understand the importance of effective budget planning and strive to provide intuitive,
          user-friendly solutions to meet the diverse needs of our clients.
        </p>
        <p className="text-md md:text-lg mb-4">
          With a commitment to efficiency and innovation, we empower individuals and businesses to take control of their finances
          and achieve their goals with ease.
        </p>
        <p className="text-md md:text-lg">
          At BudgetEase Solutions, our mission is to make budgeting effortless and accessible for everyone. Whether you're a small
          business owner, a busy professional, or an individual looking to manage your personal finances, we offer tailored solutions
          to streamline your budgeting process.
        </p>
      </div>
    </div>
  )
}

export default LandingPage;
