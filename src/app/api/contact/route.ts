import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, telefono, mensaje } = await request.json()

    // Validar campos requeridos
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    // Configurar nodemailer (usando un servicio de email genérico)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER || 'your-email@gmail.com',
        pass: process.env.SMTP_PASS || 'your-app-password',
      },
    })

    // Contenido del email
    const mailOptions = {
      from: `"Invitación 15 Años Isabella" <${process.env.SMTP_USER || 'noreply@example.com'}>`,
      to: 'arnaldohlopez@gmail.com',
      subject: `Consulta sobre los 15 años de Isabella - ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #3B82F6, #1D4ED8); padding: 20px; border-radius: 10px; color: white; text-align: center; margin-bottom: 20px;">
            <h1 style="margin: 0; font-size: 24px;">15 Años de Isabella</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Nueva consulta recibida</p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #1e40af; margin-top: 0;">Datos del Contacto</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${telefono ? `<p><strong>Teléfono:</strong> ${telefono}</p>` : ''}
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 10px;">
            <h3 style="color: #1e40af; margin-top: 0;">Mensaje:</h3>
            <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #3B82F6; margin: 0;">
              ${mensaje.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; border-top: 2px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              Este mensaje fue enviado desde la invitación digital de los 15 años de Isabella Rocío Tejada
            </p>
          </div>
        </div>
      `,
      text: `
        Consulta sobre los 15 años de Isabella
        
        Nombre: ${nombre}
        Email: ${email}
        ${telefono ? `Teléfono: ${telefono}` : ''}
        
        Mensaje:
        ${mensaje}
      `
    }

    // Intentar enviar el email
    try {
      await transporter.sendMail(mailOptions)
      
      return NextResponse.json(
        { message: 'Mensaje enviado exitosamente' },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Error sending email:', emailError)
      
      // Como fallback, podríamos guardar en una base de datos o archivo
      // Por ahora, simplemente registramos que se recibió el mensaje
      console.log('Message received:', { nombre, email, telefono, mensaje, timestamp: new Date().toISOString() })
      
      return NextResponse.json(
        { message: 'Mensaje recibido exitosamente. Te contactaremos pronto.' },
        { status: 200 }
      )
    }

  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}