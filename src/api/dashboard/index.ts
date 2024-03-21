import { instance } from '../instance'

const getDashboard = () => {
  return instance.get('/dashboard')
}

export { getDashboard }
