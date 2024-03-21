import { HttpResponse, http } from 'msw'

export const dashboardHandlers = [
  http.get('/dashboard', ({ request, params, cokies }) => {
    return HttpResponse.json(['Tom', 'Jerry', 'Spike'])
  })
]
