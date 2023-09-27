import logo from "../../assets/logo.png";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const fullName = form.fullname.value;
    const date = form.date.value;
    const address = form.address.value;
    const cell = form.cell.value;
    const email = form.email.value;
    const availableDate = form.available_date.value;
    const rsaPassport = form.rsa_passport.value;
    const suburb = form.suburb.value;
    const massageTypes = form.massageTypes.value;
    const massageExperience = form.massageExperience.value;
    const nailTypes = form.nailTypes.value;
    const nailExperience = form.nailExperience.value;
    const facialTypes = form.facialTypes.value;
    const facialExperience = form.facialExperience.value;
    const otherTypes = form.otherTypes.value;
    const otherExperience = form.otherExperience.value;
    // get checked therapies
    const therapies = [];
    const therapiesInputs = document.querySelectorAll(
      'input[name="therapies"]'
    );
    therapiesInputs.forEach((input) => {
      if (input.checked) {
        therapies.push(input.value);
      }
    });
    const crime = form.crime.value;
    const authorized = form.autorized.value;
    const explain = form.explain.value;
    const refName1 = form.ref_name1.value;
    const refRel1 = form.ref_rel1.value;
    const refCompany1 = form.ref_company1.value;
    const refPhone1 = form.ref_phone1.value;
    const refAddress1 = form.ref_address1.value;
    const refName2 = form.ref_name2.value;
    const refRel2 = form.ref_rel2.value;
    const refCompany2 = form.ref_company2.value;
    const refPhone2 = form.ref_phone2.value;
    const refAddress2 = form.ref_address2.value;
    const refName3 = form.ref_name3.value;
    const refRel3 = form.ref_rel3.value;
    const refCompany3 = form.ref_company3.value;
    const refPhone3 = form.ref_phone3.value;
    const refAddress3 = form.ref_address3.value;

    const data = {
      applicantInfo: {
        fullName,
        date,
        address,
        cell,
        email,
        availableDate,
        rsaPassport,
        suburb,
      },
      qualifiedTherapies: {
        therapies,
        massageTypes,
        massageExperience,
        nailTypes,
        nailExperience,
        facialTypes,
        facialExperience,
        otherTypes,
        otherExperience,
      },
      crime,
      authorized,
      explain,
      reference: {
        reference1: {
          refName1,
          refRel1,
          refCompany1,
          refPhone1,
          refAddress1,
        },
        reference2: {
          refName2,
          refRel2,
          refCompany2,
          refPhone2,
          refAddress2,
        },
        reference3: {
          refName3,
          refRel3,
          refCompany3,
          refPhone3,
          refAddress3,
        },
      },
    };

    // console.log(data)

    fetch(
      "https://serenity-well-server.vercel.app/api/v1/addFreelanceTherapist",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        // body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Application submitted successfully");
          form.reset();
        } else {
          alert("Something went wrong, please try again");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong, please try again");
      });
  };
  return (
    <div className="App">
      <a href="http://serenitywell.africa/" target="_blank" rel="noreferrer">
        <img src={logo} className="logo mb-3" alt="" />
      </a>
      <h4 className="fw-bold text-dark text-decoration-none mb-0">
        Freelance Therapist Application
      </h4>

      <div className="header bg-green p-2 my-3">
        <h5 className="text-center text-white mb-0">Applicant Information</h5>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-md-8">
            <div className="form-group d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="name" className="d-block">
                Full Name:{" "}
              </label>
              <input
                type="text"
                name="fullname"
                id="name"
                className="form-control border-0 border-bottom border-black rounded-0"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="date" className="d-block">
                Date:{" "}
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-control border-0 border-bottom border-black rounded-0"
                placeholder="Enter Date"
              />
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group d-flex justify-content-between align-items-start mb-3">
              <label htmlFor="name" className="d-block">
                Address:{" "}
              </label>
              <textarea
                rows="4"
                name="address"
                id="address"
                className="form-control border-0 border-bottom border-black rounded-0 pt-0"
                placeholder="Enter Address"
              ></textarea>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="date" className="d-block">
                Cell:{" "}
              </label>
              <input
                type="text"
                name="cell"
                id="cell"
                className="form-control border-0 border-bottom border-black rounded-0"
                placeholder="Enter Cell Number"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="email" className="d-block">
                Email:{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control border-0 border-bottom border-black rounded-0"
                placeholder="Enter Email"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="available" className="d-block">
                Date Available:{" "}
              </label>
              <input
                type="date"
                name="available_date"
                id="available"
                className="form-control border-0 border-bottom border-black rounded-0"
                placeholder="Enter Date"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="rsa" className="d-block">
                RSA ID / Passport No:{" "}
              </label>
              <input
                type="text"
                name="rsa_passport"
                id="rsa"
                className="form-control border-0 border-bottom border-black rounded-0"
                placeholder="Enter Date"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group d-flex justify-content-between align-items-center mb-3">
              <label htmlFor="suburb" className="d-block">
                Suburb for Service:{" "}
              </label>
              <input
                type="text"
                name="suburb"
                id="suburb"
                className="form-control border-0 border-bottom border-black rounded-0"
                placeholder="Enter suburb"
              />
            </div>
          </div>

          <table className="table mb-0">
            <tr>
              <td valign="top" rowSpan={5}>
                <span>Qualified Therapies:</span>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="therapies"
                  value={"massage"}
                  id=""
                />
                <span htmlFor="Massage">Massage</span>
              </td>
              <td>
                <input
                  type="text"
                  name="massageTypes"
                  placeholder="types"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  id=""
                />
              </td>
              <td>
                <input
                  type="text"
                  name="massageExperience"
                  placeholder="Years of Experience"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  id=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" name="therapies" value={"nails"} id="" />
                <span htmlFor="Massage">Nails</span>
              </td>
              <td>
                <input
                  type="text"
                  name="nailTypes"
                  placeholder="types"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  id=""
                />
              </td>
              <td>
                <input
                  type="text"
                  name="nailExperience"
                  placeholder="Years of Experience"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  id=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="therapies"
                  value={"facials"}
                  id=""
                />
                <span htmlFor="Massage">Facials</span>
              </td>
              <td>
                <input
                  type="text"
                  name="facialTypes"
                  placeholder="types"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  id=""
                />
              </td>
              <td>
                <input
                  type="text"
                  name="facialExperience"
                  placeholder="Years of Experience"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  id=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="checkbox"
                  name="therapies"
                  value={"others"}
                  id=""
                />
                <span htmlFor="Massage">Others</span>
              </td>
              <td>
                <input
                  type="text"
                  name="otherTypes"
                  placeholder="types"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  id=""
                />
              </td>
              <td>
                <input
                  type="text"
                  name="otherExperience"
                  placeholder="Years of Experience"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  id=""
                />
              </td>
            </tr>
          </table>

          <div className="col-md-6">
            <span htmlFor="">Have you ever been convicted of a crime?</span>
            <div className="form-group d-flex justify-content-start align-items-center my-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="crime"
                  id="crime_yes"
                  value="yes"
                />
                <label className="form-check-label" htmlFor="crime_yes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="crime"
                  id="crime_no"
                  value="no"
                />
                <label className="form-check-label" htmlFor="crime_no">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <span htmlFor="">
              Is serenity well authorized to conduct a background heck?
            </span>
            <div className="form-group d-flex justify-content-start align-items-center my-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="autorized"
                  id="auth_yes"
                  value="yes"
                />
                <label className="form-check-label" htmlFor="auth_yes">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="autorized"
                  id="auth_no"
                  value="no"
                />
                <label className="form-check-label" htmlFor="auth_no">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group mb-3">
              <span htmlFor="explain" className="d-block mb-3">
                If Yes, Explain
              </span>
              <input
                type="text"
                name="explain"
                id="explain"
                className="form-control border-0 border-bottom border-black rounded-0"
                placeholder="Explanation"
              />
            </div>
          </div>

          <div className="header bg-green p-2 mt-3">
            <h5 className="text-center text-white mb-0">Reference</h5>
          </div>

          <p className="col-md-12">
            Please List 3 Professional References (Not Relatives)
          </p>

          <div className="ref row mb-3 border-bottom">
            <div className="col-md-8">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Name:{" "}
                </label>
                <input
                  type="text"
                  name="ref_name1"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Relation:{" "}
                </label>
                <input
                  type="text"
                  name="ref_rel1"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter Relation"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Comapny:{" "}
                </label>
                <input
                  type="text"
                  name="ref_company1"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter Company"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Phone:{" "}
                </label>
                <input
                  type="text"
                  name="ref_phone1"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter Company"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Address:{" "}
                </label>
                <input
                  type="text"
                  name="ref_address1"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter Address"
                />
              </div>
            </div>
          </div>
          <div className="ref row mb-3 border-bottom">
            <div className="col-md-8">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Name:{" "}
                </label>
                <input
                  type="text"
                  name="ref_name2"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Relation:{" "}
                </label>
                <input
                  type="text"
                  name="ref_rel2"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter Relation"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Comapny:{" "}
                </label>
                <input
                  type="text"
                  name="ref_company2"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter Company"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Phone:{" "}
                </label>
                <input
                  type="text"
                  name="ref_phone2"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter Company"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Address:{" "}
                </label>
                <input
                  type="text"
                  name="ref_address2"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter Address"
                />
              </div>
            </div>
          </div>
          <div className="ref row mb-3">
            <div className="col-md-8">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Name:{" "}
                </label>
                <input
                  type="text"
                  name="ref_name3"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Relation:{" "}
                </label>
                <input
                  type="text"
                  name="ref_rel3"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter Relation"
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Comapny:{" "}
                </label>
                <input
                  type="text"
                  name="ref_company3"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter Company"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Phone:{" "}
                </label>
                <input
                  type="text"
                  name="ref_phone3"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter Company"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group d-flex justify-content-between align-items-center mb-3">
                <label htmlFor="name" className="d-block">
                  Address:{" "}
                </label>
                <input
                  type="text"
                  name="ref_address3"
                  id="name"
                  className="form-control border-0 border-bottom border-black rounded-0"
                  placeholder="Enter Address"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 text-end">
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
