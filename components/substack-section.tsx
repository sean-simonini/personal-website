import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SubstackSection() {
  return (
    <section id="substack" className="scroll-mt-20">
      <div className="space-y-4 mb-8 text-center">
        <h2 className="text-3xl font-bold">Latest from Substack</h2>
        <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="text-center">
          <CardHeader className="space-y-4 pb-2">
            <div className="mx-auto w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src="https://substackcdn.com/image/fetch/w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack.png"
                alt="Substack"
                className="w-3/4 h-3/4 object-contain filter grayscale"
              />
            </div>
            <CardTitle>
              <a
                href="https://seansimonini.substack.com/p/making-a-synthetic-cell"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Making a Synthetic Cell
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Observations and ideas for how to build life from the bottom-up.</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader className="space-y-4 pb-2">
            <div className="mx-auto w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src="https://substackcdn.com/image/fetch/w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack.com%2Fimg%2Fsubstack.png"
                alt="Substack"
                className="w-3/4 h-3/4 object-contain filter grayscale"
              />
            </div>
            <CardTitle>
              <a
                href="https://seansimonini.substack.com/p/a-return-to-the-beginning"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                A Return to the Beginning
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>An honest examination of what I am doing, and why I am here.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <a
          href="https://seansimonini.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          View all articles →
        </a>
      </div>
    </section>
  )
}
