import { IUserDetails } from "../types";

const userData: React.FC<IUserDetails> = ({
  profile,
  email,
  education,
  socials,
  guarantor,
}) => {
  return (
    <div>
      <div className="piMainContainer">
        <div className="piMainHeading">Personal Information</div>
        <div className="piContainer">
          <div>
            <div className="piHeading">full Name</div>
            <div>
              <div className="piDetails">
                <span>{profile.firstName} </span>
                <span>{profile.lastName}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="piHeading">Phone Number</div>
            <div className="piDetails">{profile.phoneNumber}</div>
          </div>
          <div>
            <div className="piHeading">Email Address</div>
            <div className="piDetails">{email}</div>
          </div>
          <div>
            <div className="piHeading">Bvn</div>
            <div className="piDetails">{profile.bvn}</div>
          </div>
          <div>
            <div className="piHeading">Gender</div>
            <div className="piDetails">{profile.gender}</div>
          </div>
          <div>
            <div className="piHeading">Marital status</div>
            <div className="piDetails">
            {'-'}
            </div>
          </div>
          <div>
            <div className="piHeading">Children</div>
            <div className="piDetails">
            {'-'}
            </div>
          </div>
          <div>
            <div className="piHeading">Type of residence</div>
            <div className="piDetails">{profile.address}</div>
          </div>
        </div>
      </div>
      <div className="eeMainContainer">
        <div className="eeMainHeading">Education and Employment</div>
        <div className="eeContainer">
          <div>
            <div className="piHeading">level of education</div>
            <div>
              <div className="piDetails">{education.level}</div>
            </div>
          </div>
          <div>
            <div className="piHeading">employment status</div>
            <div className="piDetails">{education.employmentStatus}</div>
          </div>
          <div>
            <div className="piHeading">sector of employment</div>
            <div className="piDetails">{education.sector}</div>
          </div>
          <div>
            <div className="piHeading">Duration of employment</div>
            <div className="piDetails">{education.duration}</div>
          </div>
          <div>
            <div className="piHeading">office email</div>
            <div className="piDetails">{education.officeEmail}</div>
          </div>
          <div>
            <div className="piHeading">Monthly income</div>
            <div className="piDetails">
              ₦{education.monthlyIncome[0]} - ₦{education.monthlyIncome[1]}
            </div>
          </div>
          <div>
            <div className="piHeading">loan repayment</div>
            <div className="piDetails">{education.loanRepayment}</div>
          </div>
        </div>
      </div>
      <div className="socMainContainer">
        <div className="socMainHeading">Socials</div>
        <div className="socContainer">
          <div >
            <div className="piHeading">Twitter</div>
            <div className="piDetails">{socials.facebook}</div>
          </div>
          <div>
            <div className="piHeading">Facebook</div>
            <div>
              <div className="piDetails">{socials.instagram}</div>
            </div>
          </div>
          <div>
            <div className="piHeading">Instagram</div>
            <div>
              <div className="piDetails"> {socials.twitter}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ganMainContainer">
        <div className="ganMainHeading">Guarantor</div>
        <div className="ganContainer">
          <div>
            <div className="piHeading">full Name</div>
            <div className="piDetails">
              <span>{guarantor.firstName}</span>
              <span>{guarantor.lastName}</span>
            </div>
          </div>
          <div>
            <div className="piHeading">Phone Number</div>
            <div className="piDetails">{guarantor.phoneNumber}</div>
          </div>
          <div>
            <div className="piHeading">Email Address</div>
            <div>
              <div className="piDetails">{guarantor.address}</div>
            </div>
          </div>
          <div>
            <div className="piHeading">Gender</div>
            <div>
              <div className="piDetails">{guarantor.gender}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ganContainer2">
        <div>
          <div className="piHeading">full Name</div>
          <div className="piDetails">
            <span>{guarantor.firstName}</span>
            <span>{guarantor.lastName}</span>
          </div>
        </div>
        <div>
          <div className="piHeading">Phone Number</div>
          <div className="piDetails">{guarantor.phoneNumber}</div>
        </div>
        <div>
          <div className="piHeading">Email Address</div>
          <div>
            <div className="piDetails">{guarantor.address}</div>
          </div>
        </div>
        <div>
          <div className="piHeading">Gender</div>
          <div>
            <div className="piDetails">{guarantor.gender}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userData;
