// components/payouts/IntegrationSection.tsx
import { Code, Cpu, GitBranch, Terminal } from "lucide-react";
import { Container } from "@/layout/Container";
import  Button  from "@/ui/Button";

export function IntegrationSection() {
  return (
    <section className="py-15 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Developer Friendly Integration</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our REST API is designed for developers with comprehensive documentation and client libraries in multiple languages.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <Code className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Clear Documentation</h4>
                  <p className="text-sm text-gray-600">Detailed guides and examples</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <GitBranch className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">SDKs Available</h4>
                  <p className="text-sm text-gray-600">Node, Python, PHP, Java</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Terminal className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Sandbox Environment</h4>
                  <p className="text-sm text-gray-600">Test before going live</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Cpu className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Webhooks</h4>
                  <p className="text-sm text-gray-600">Real-time transaction updates</p>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="px-6">
              View API Documentation
            </Button>
          </div>
          
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="p-4 bg-gray-800 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="p-6 text-gray-300 text-sm overflow-x-auto">
              <code>
{`// Example API request
fetch('https://api.xtopay.co/v1/payouts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    recipient: "0241234567",
    amount: 150.00,
    network: "MTN",
    reference: "invoice_12345"
  })
})
.then(response => response.json())
.then(data => console.log(data));`}
              </code>
            </pre>
          </div>
        </div>
      </Container>
    </section>
  );
}