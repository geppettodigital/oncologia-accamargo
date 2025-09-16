import { Hono } from 'hono'
import { html, raw } from 'hono/html'
import { aiConcernsHTML } from '../components/ai-concerns-enhanced'

export const researchPage = (c: any) => {
  // Redirecionar para o novo portal de pesquisa aprimorado
  return c.redirect('/research-portal')
}