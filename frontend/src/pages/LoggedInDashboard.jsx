import React from "react";
import axios from "axios";

import BabyFactsCard from "../components/BabyFactsCard";
import ToDoListCard from "../components/ToDoListCard";
import Footer from "../components/Footer";
import NavBar2 from "../components/NavBar2";
import UserProfile from "../components/UserProfile";

function LoggedInDashboard() {
  const userId = localStorage.getItem("userId");

  return (
    <>
      <NavBar2 />
      <div className="bg-cover" style={{backgroundImage: 'url("/src/assets/nursery.jpg")'}}>
        <div className="bg-cover">
          <div className="flex justify-center">
            <section className="m-10 block max-w-4xl bg-transparent rounded-bl-3xl rounded-tr-3xl shadow-black shadow-lg">
              <div className="flex flex-col items-center justify-center">
                <UserProfile userId={userId} />
                <br />
                <hr className="border-t border-gray-900 custom-width my-5" />
              </div>
              <div className="">
                <div className="flex flex-row justify-center gap-5 p-10">
                  <div>
                    <BabyFactsCard />
                  </div>
                  <div>
                    <ToDoListCard />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoggedInDashboard;
