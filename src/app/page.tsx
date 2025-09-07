'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function InvitacionPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage('¡Mensaje enviado exitosamente! Te responderemos pronto.')
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
      } else {
        setSubmitMessage('Error al enviar el mensaje. Por favor intenta nuevamente.')
      }
    } catch (error) {
      setSubmitMessage('Error de conexión. Por favor intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-8 px-4">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main invitation card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-blue-100 overflow-hidden">
          
          {/* Header with decorative image */}
          <div className="relative h-64 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
            <img 
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5dabeeca-3ae9-4ea1-8002-ab8f388a655b.png" 
              alt="Decoración elegante de quinceañera con corona de princesa"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-2 text-shadow-lg">15 Años</h1>
                <div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="p-8 md:p-12">
            
            {/* Name section */}
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-elegant text-blue-800 mb-4">
                Isabella Rocío Tejada
              </h2>
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="w-20 h-px bg-blue-300"></div>
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/64f8d1e1-e820-4593-9447-81c5d8b78755.png" 
                  alt="Corona de princesa con gemas azules"
                  className="w-16 h-16 rounded-full border-4 border-blue-200"
                />
                <div className="w-20 h-px bg-blue-300"></div>
              </div>
              <p className="text-blue-600 text-xl font-medium">Te invita a celebrar sus quince años</p>
            </div>

            {/* Event details */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              
              {/* Left column - Date and time */}
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📅</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800">Fecha</h3>
                      <p className="text-blue-600 text-xl font-medium">15 de Noviembre</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🕘</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800">Horario</h3>
                      <p className="text-blue-600 text-xl font-medium">21:30 hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Location */}
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800">Lugar</h3>
                      <p className="text-blue-600 text-lg font-medium">Salón Alcazar</p>
                      <p className="text-blue-500">Mitre N° 155, Punta Alta</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">👗</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800">Código de Vestimenta</h3>
                      <p className="text-blue-600 text-lg font-medium">Elegante Sport</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RSVP section */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-2xl mb-10">
              <h3 className="text-2xl font-bold text-center mb-6">Confirmar Asistencia</h3>
              <p className="text-center text-blue-100 mb-4 text-lg">
                Antes del 25 de Octubre
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center bg-blue-600 p-4 rounded-xl">
                  <p className="font-semibold mb-1">Marienela</p>
                  <a href="tel:2901507808" className="text-blue-200 hover:text-white text-lg font-mono">
                    2901 507808
                  </a>
                </div>
                <div className="text-center bg-blue-600 p-4 rounded-xl">
                  <p className="font-semibold mb-1">Isabella</p>
                  <a href="tel:2932506461" className="text-blue-200 hover:text-white text-lg font-mono">
                    2932 506461
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative image section */}
            <div className="mb-10">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7e3a145f-2f05-45ea-aca7-e402d5f81e54.png" 
                alt="Decoración elegante de fiesta de quinceañera con flores azules y globos"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Contact form */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-800 text-center mb-6">¿Tienes Consultas?</h3>
              <p className="text-gray-600 text-center mb-8">
                Envíanos un mensaje y te responderemos a la brevedad
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <Input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="border-blue-200 focus:border-blue-500"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-blue-200 focus:border-blue-500"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono (Opcional)
                  </label>
                  <Input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="border-blue-200 focus:border-blue-500"
                    placeholder="Tu número de teléfono"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="border-blue-200 focus:border-blue-500"
                    placeholder="Escribe tu consulta aquí..."
                  />
                </div>
                
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </div>
                
                {submitMessage && (
                  <div className={`text-center p-4 rounded-lg ${
                    submitMessage.includes('exitosamente') 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-blue-600">
          <p className="text-sm">
            ¡Tu presencia hará especial esta celebración!
          </p>
        </div>
      </div>
    </div>
  )
}