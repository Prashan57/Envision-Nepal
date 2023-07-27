import React, { useEffect, useState } from "react";
import Layout from "../layouts";
import { useNavigate, useParams } from "react-router-dom";
import { useAdmin } from "../hooks/useAdminBid";
import { color } from "../constants/color";

const BidDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { useGetAdminPostByID } = useAdmin();

  const [data, setData] = useState({
    title: "",
    bidAmount: "",
    description: "",
    email: "",
  });

  useEffect(() => {
    if (params.id) {
      console.log(params.id);
      useGetAdminPostByID(params.id).then((res) => {
        setData(res);
      });
    }
  }, [params.id]);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "25px",
            margin: "15px",
          }}
        >
          <button
            style={{ marginRight: "15px" }}
            onClick={() => navigate("/trainingList")}
          >
            ←
          </button>
          <b>{data.title}</b>
        </div>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px",
          marginBottom: "100px",
        }}
      >
        Government procurement, also known as public procurement or government
        purchasing, refers to the process by which government entities purchase
        goods, services, and works from suppliers and contractors to meet their
        operational needs and deliver public services. The procurement process
        is typically governed by a set of laws, regulations, and procedures to
        ensure fairness, transparency, competition, and efficiency in the use of
        public funds. Here's an explanation of the key aspects of procurement
        organized by the government: <br />
        <br />
        1. **Objectives**: Government procurement serves various objectives,
        including acquiring goods and services necessary for government
        operations, delivering public services, building public infrastructure,
        and supporting economic development by providing business opportunities
        to suppliers and contractors. <br />
        2. **Legal Framework**: Governments establish legal frameworks to govern
        procurement processes. These frameworks often define the rules,
        procedures, and principles for procurement, aiming to ensure fairness,
        transparency, competition, and accountability. <br />
        3. **Procurement Methods**: Governments use different procurement
        methods based on the nature and complexity of the goods or services
        being procured. Common methods include open tendering, request for
        proposals (RFPs), competitive negotiation, and direct procurement in
        specific circumstances. <br />
        4. **Public Contracts**: The government enters into contracts with
        selected suppliers or contractors. These contracts specify the terms and
        conditions, such as price, delivery schedule, quality standards, and
        performance requirements. <br />
        5. **Bid Evaluation**: In competitive procurement processes, bids are
        evaluated based on predetermined criteria to select the most qualified
        and cost-effective supplier or contractor. Evaluation criteria may
        include price, technical capabilities, past performance, and compliance
        with regulations.
        <br /> 6. **Transparency and Accountability**: Transparency is crucial
        in government procurement to ensure that the process is open to public
        scrutiny and that taxpayers' money is used responsibly. Governments
        often publish procurement opportunities, award notices, and contract
        details to promote accountability.
        <br /> 7. **Ethical Considerations**: Procurement processes must be free
        from corruption and unethical practices. Anti-corruption measures,
        conflict of interest regulations, and disclosure requirements are often
        put in place to prevent abuse of the procurement system.
        <br /> 8. **Small and Minority Businesses**: Governments may have
        policies to promote the participation of small and minority businesses
        in government procurement. These policies aim to foster economic growth,
        diversity, and inclusivity. <br />
        9. **International Trade Agreements**: In many cases, government
        procurement is subject to international trade agreements that ensure
        fair treatment of foreign suppliers and promote international
        competition.
        <br /> 10. **Electronic Procurement**: Many governments are adopting
        electronic procurement systems (e-procurement) to streamline the
        procurement process, enhance efficiency, reduce paperwork, and
        facilitate communication between buyers and suppliers. Government
        procurement plays a critical role in supporting the functioning of
        public services, infrastructure development, and economic growth. By
        adhering to sound procurement practices, governments can ensure optimal
        utilization of public resources while fostering a competitive and fair
        marketplace for suppliers and contractors.{" "}
      </div>
    </Layout>
  );
};

export default BidDetails;
