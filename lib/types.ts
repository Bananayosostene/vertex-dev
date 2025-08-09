export interface Project {
  id: string
  name: string
  location: string
  image: string
  description: string
  status: "planning" | "in-progress" | "completed"
  client: string
  startDate: string
  endDate: string
}

export interface Service {
  id: string
  name: string
  description: string
  price: string
}

export interface Client {
  id: string
  name: string
  email: string
  phone: string
  address: string
  projects: number
  totalSpent: number
}

export interface DashboardProject {
  id: string
  name: string
  client: string
  status: "planning" | "in-progress" | "completed"
  progress: number
  dueDate: string
}

export interface Inquiry {
  id: string
  name: string
  email: string
  subject: string
  message: string
  date: string
  status: "new" | "responded" | "closed"
}
