

type userProfile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string; adress: string;
  currency: string;
}

type userGuarantor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

type userSocials = {
  facebook: string;
  instagram: string;
  twitter: string;
}

type userEducation = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string
}

export interface IUserDetails {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: userProfile,
  guarantor: userGuarantor,
  accountBalance: string;
  accountNumber: string;
  socials: userSocials,
  education: userEducation,
  id: string
}
