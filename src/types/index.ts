export interface LoanRequest {
  id: number
  externalId: string
  amount: number
  duration: number
  status: string
  monthlyPayment: number
  interestRate: number
  externalProductId: number
  createdAt: string
  updatedAt?: string
  rejectedAt: any
  approvedAt?: string
  rejectionReason: any
  closedAt?: string
  activatedAt?: string
  account: Account
}

export interface Account {
  id: number
  providerId: string
  accountNumber: string
  iban: string
  currency: string
  type: string
  holder: string
  holderType: string
  isCompanyPublished: boolean
  createdAt?: string
  loanLimit: number
  company: Company
}

export interface Company {
  id: number
  legalForm: string
  name: string
  registrationNumber: string
  registrationDistrict: string
  registrationDate: string
  riskClass?: string
  loanLimit?: number
  country: string
  street: string
  state: string
  postcode: string
  city: string
  employees: Employee[]
  isDataComplete: boolean
}

export interface Employee {
  id: number
  name: string
  roleName: string
}
