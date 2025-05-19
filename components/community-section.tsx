import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunitySection() {
  return (
    <section id="community" className="scroll-mt-20">
      <div className="space-y-4 mb-8 text-center">
        <h2 className="text-3xl font-bold">Community Building</h2>
        <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="text-center">
          <CardHeader className="space-y-4 pb-2">
            <div className="mx-auto w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D560BAQFgOqRp1v_X3Q/company-logo_200_200/company-logo_200_200/0/1724163356651/aging_initiative_at_harvard_logo?e=1749686400&v=beta&t=-D8Ubb0RY3nk25KvaRU1oGC4KbaT6oVPPKzGYs8tESc"
                alt="Aging Initiative"
                className="w-full h-full object-cover"
              />
            </div>
            <CardTitle>
              <a
                href="https://www.aging-initiative.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Aging Initiative
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Director of Policy - working to connect aging biology researchers and the larger community with decision
              makers to ensure everyone can live healthier, for longer.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader className="space-y-4 pb-2">
            <div className="mx-auto w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src="https://cdn.prod.website-files.com/656ae021fd5213ff8527eeb1/66d711e6d07faab9b50d32ae_NucleateLogoSmall.png"
                alt="Nucleate Inside: Aging"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
            <CardTitle>
              <a
                href="https://nucleate.org/path/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Nucleate Inside: Aging
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Managing Director of the Inside: Aging Series - hosting global leaders in aging biology on monthly
              webinars to educate students, trainees, investors, and the general public about what aging biology is (and
              what it isn't!) as well as how to get involved.
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 text-center">
          <CardHeader className="space-y-4 pb-2">
            <div className="mx-auto w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src="https://media-hosting.imagekit.io/ca738ddb741b41ae/Untitled%20design-96.png?Expires=1838896085&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=yqfzo56YcpvKAerswXEa1CZTmO3UBoJF-V1qF1ZCK2Dpnrxi3ye6xdhK4v8TnMJcSm1i2QaS~73ZKH5bBtHqJ9y1VKgCdTVZnX94dGkG6b1RvT1O9ZsWIduJDzsyKvhfS9MF~P1vtib3dT5gdQxnLuypTFjE-bH2pBGUwhzbCKCouktFXEVJkw4J8yufY6RMbwY9bH9fZ0-sqtr~R3QrK~35GdaDK4P~h0UubtZjqaPFEnUnwG2vDeZPoc7hF0MtSXPqontuLSRjkEKyZ2~QrXKxOlx9Ztu~SbltTYWKlRe0id0x2bXxkxGvCbXman0hgiFbvaVqX5o2LBw6Ar8Tgw__"
                alt="Time Initiative"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <CardTitle>
              <a
                href="https://www.timeinitiative.org/fellows"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Time Initiative
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Member of the inaugural cohort of the Time Fellowship, working to expand aging biology investment;
              currently mentoring members of Cohort 2!
            </p>
            <p className="mt-2">
              <a
                href="https://www.timeinitiative.org/blog/sean"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Moments in Time Feature →
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
