interface ContactVariables {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
  [key: string]: any;
}

export function contact(variables: ContactVariables) {
  const currentYear = new Date().getFullYear();
  
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Message from ${variables.name}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      
      body, html {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.6;
        color: #2d3748;
        background-color: #f8fafc;
      }
      
      .email-container {
        max-width: 600px;
        margin: 20px auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .email-container:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
      
      .header {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        padding: 2.5rem 2rem;
        text-align: center;
        position: relative;
        overflow: hidden;
      }
      
      .header::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
        transform: rotate(30deg);
      }
      
      .header-content {
        position: relative;
        z-index: 1;
      }
      
      .header h1 {
        margin: 0 0 0.5rem;
        font-size: 1.75rem;
        font-weight: 700;
        letter-spacing: -0.5px;
      }
      
      .header p {
        margin: 0;
        opacity: 0.9;
        font-weight: 400;
        font-size: 1rem;
      }
      
      .content {
        padding: 2.5rem 2rem;
      }
      
      .message-box {
        background: #f8fafc;
        border-left: 4px solid #6366f1;
        padding: 1.5rem;
        margin: 2rem 0;
        border-radius: 0 8px 8px 0;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
      }
      
      .message-box:hover {
        transform: translateX(4px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
      }
      
      .message {
        margin: 0;
        line-height: 1.7;
        color: #4b5563;
      }
      
      .contact-info {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 1.5rem;
        margin: 2rem 0;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03);
      }
      
      .info-item {
        margin: 1rem 0;
        padding: 0.75rem 1rem;
        background: #f8fafc;
        border-radius: 8px;
        display: flex;
        align-items: center;
        transition: all 0.2s ease;
      }
      
      .info-item:hover {
        background: #f1f5f9;
        transform: translateX(4px);
      }
      
      .info-item i {
        margin-right: 12px;
        color: #6366f1;
        width: 20px;
        text-align: center;
      }
      
      .social-links {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 2rem 0 1.5rem;
      }
      
      .social-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #f1f5f9;
        color: #4b5563;
        font-size: 18px;
        transition: all 0.3s ease;
        text-decoration: none;
      }
      
      .social-link:hover {
        background: #6366f1;
        color: white;
        transform: translateY(-2px);
      }
      
      .footer {
        text-align: center;
        padding: 2rem;
        background: #f8fafc;
        color: #64748b;
        font-size: 0.875rem;
        border-top: 1px solid #e2e8f0;
      }
      
      .footer p {
        margin: 0.5rem 0;
      }
      
      strong {
        color: #1e293b;
        font-weight: 600;
      }
      
      a {
        color: #6366f1;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s ease;
      }
      
      a:hover {
        color: #4f46e5;
        text-decoration: underline;
      }
      
      @media (max-width: 480px) {
        .content {
          padding: 1.5rem 1.25rem;
        }
        
        .header {
          padding: 2rem 1.25rem;
        }
        
        .header h1 {
          font-size: 1.5rem;
        }
      }
      
      .header p {
        margin: 0.5rem 0 0;
        opacity: 0.9;
        font-weight: 400;
      }
      
      .content {
        padding: 2rem;
      }
      
      .message {
        background-color: #f9fafb;
        border-left: 4px solid #6366f1;
        padding: 1.25rem;
        border-radius: 0 0.5rem 0.5rem 0;
        margin: 1.5rem 0;
      }
      
      .message p {
        margin: 0;
        color: #4b5563;
        line-height: 1.7;
        white-space: pre-line;
      }
      
      .details {
        margin: 2rem 0;
      }
      
      .detail-row {
        display: flex;
        margin-bottom: 0.75rem;
        align-items: flex-start;
      }
      
      .detail-label {
        font-weight: 600;
        min-width: 80px;
        color: #1f2937;
      }
      
      .detail-value {
        flex: 1;
        color: #4b5563;
      }
      
      .detail-value a {
        color: #6366f1;
        text-decoration: none;
        transition: color 0.2s;
      }
      
      .detail-value a:hover {
        color: #4f46e5;
        text-decoration: underline;
      }
      
      .footer {
        background-color: #f9fafb;
        padding: 1.5rem 2rem;
        text-align: center;
        border-top: 1px solid #e5e7eb;
        font-size: 0.875rem;
        color: #6b7280;
      }
      
      .footer p {
        margin: 0.5rem 0;
      }
      
      .social-links {
        margin: 1rem 0;
      }
      
      .social-links a {
        display: inline-block;
        margin: 0 0.5rem;
        color: #6366f1;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s;
      }
      
      .social-links a:hover {
        color: #4f46e5;
        transform: translateY(-1px);
      }
      
      @media (max-width: 600px) {
        .email-container {
          margin: 0;
          border-radius: 0;
        }
        
        .content, .header {
          padding: 1.5rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <div class="header-content">
          <h1>New Message from ${variables.name}</h1>
          <p>You've received a new message from your portfolio contact form</p>
        </div>
      </div>
      
      <div class="content">
        <h2>Hello! 👋</h2>
        <p>You've received a new message through your portfolio. Here are the details:</p>
        
        <div class="message-box">
          <div class="message">${variables.message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div class="contact-info">
          <div class="info-item">
            <i class="fas fa-user"></i>
            <div>
              <strong>Name:</strong> ${variables.name}
            </div>
          </div>
          
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <div>
              <strong>Email:</strong> 
              <a href="mailto:${variables.email}">${variables.email}</a>
            </div>
          </div>
          
          ${variables.phone ? `
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <div>
              <strong>Phone:</strong> 
              <a href="tel:${variables.phone}">${variables.phone}</a>
            </div>
          </div>` : ''}
          
          ${variables.subject ? `
          <div class="info-item">
            <i class="fas fa-tag"></i>
            <div>
              <strong>Subject:</strong> ${variables.subject}
            </div>
          </div>` : ''}
        </div>
        
        <p style="margin-top: 2rem; color: #64748b; font-style: italic;">
          This message was sent via your portfolio contact form.
        </p>
      </div>
      
      <div class="footer">
        <div class="social-links">
          <a href="${process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com'}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="${process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com'}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="${process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com'}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="${process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com'}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <p>This email was sent from your portfolio contact form</p>
        <p>&copy; ${currentYear} Mohan Maali. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
}