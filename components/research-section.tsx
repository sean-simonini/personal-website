"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResearchSection() {
  return (
    <section id="research" className="scroll-mt-20">
      <div className="space-y-4 mb-8 text-center">
        <h2 className="text-3xl font-bold">Research</h2>
        <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
      </div>

      <Tabs defaultValue="labs" className="w-full">
        <TabsList className="mb-8 w-full sm:w-auto mx-auto">
          <TabsTrigger value="labs" className="text-base">
            Labs
          </TabsTrigger>
          <TabsTrigger value="works" className="text-base">
            Works
          </TabsTrigger>
        </TabsList>

        <TabsContent value="labs" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="text-center">
              <CardHeader className="space-y-4 pb-2">
                <div className="mx-auto w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src="https://pbs.twimg.com/profile_images/1074707204371111936/UJKKAQDO_400x400.jpg"
                    alt="Rubin Lab"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>
                  <a
                    href="https://hscrb.harvard.edu/labs/rubin-lab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Harvard University (SCRB); Rubin Lab
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Researching the underlying effects of aging in the onset of ALS and identifying potential therapeutic
                  candidates.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="space-y-4 pb-2">
                <div className="mx-auto w-16 h-16 rounded-full overflow-hidden bg-white">
                  <img
                    src="https://pbs.twimg.com/profile_images/1435185080159379456/HZ-C9hzt_400x400.png"
                    alt="UMass Medical School"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>UMass Medical School; Henninger Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Characterizing the effect of Sarm1 ablation in ameliorating traumatic brain injury and ALS phenotypes,
                  with an emphasis on TDP-43 mislocalization.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="space-y-4 pb-2">
                <div className="mx-auto w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="https://www.uml.edu/Images/uml_vertical_logo_no_tagline_tcm18-59064.png?w=l"
                    alt="UMass Lowell"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <CardTitle>UMass Lowell; Melamed Lab for Computational Biology</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Developed pipelines to predict brain-region specific gene expression patterns in patients with
                  Alzheimer's Disease and made comparisons to normal aging to identify canonical brain aging expression
                  patterns (also see Biomarkers of Aging presentation 2024).
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="space-y-4 pb-2">
                <div className="mx-auto w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src="https://pbs.twimg.com/profile_images/1488219756083781634/IJYBz7jd_400x400.jpg"
                    alt="BU CTE Center"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>Boston University Chronic Traumatic Encephalopathy Center (BU CTE)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Examined GWAS data of patients with and without Chronic Traumatic Encephalopathy (CTE) to identify
                  potentially resilient genes as well as gene expression patterns that tell us more about the
                  progression of the disease.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="works" className="space-y-6">
          <div className="space-y-8">
            <Card className="text-center">
              <CardHeader className="space-y-4 pb-2">
                <div className="mx-auto w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2372/2372512.png"
                    alt="Sarm1 paper"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <CardTitle>
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov/39791335/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Genetic Ablation of Sarm1 Mitigates Disease Acceleration after Traumatic Brain Injury in the
                    SOD1G93A Transgenic Mouse Model of Amyotrophic Lateral Sclerosis
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Topline:</p>
                <p className="mt-1">
                  Ablation of the Sarm1 gene limits the onset of ALS and injury-associated phenotypes, continuing to
                  build the case for Sarm1 as a potential therapeutic target in neurodegenerative conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="space-y-4 pb-2">
                <div className="mx-auto w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/014/218/628/non_2x/brain-icon-black-and-white-line-vector.jpg"
                    alt="Biomarkers of aging"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <CardTitle>
                  <a
                    href="https://www.canva.com/design/DAGjmZvqwmo/pg1eo2bi22pvmkL5N6m3xQ/view?utm_content=DAGjmZvqwmo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h53284bbe18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Biomarker of Aging and Alzheimer's: insights on Shared and Distinct Indicators of Cognitively Normal
                    Aging and Neurodegenerative Disease
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Topline:</p>
                <p className="mt-1">
                  Neurofilament light levels in the blood may serve as an aging-specific biomarker of cognitive decline
                  that is not necessarily correlated with Alzheimer's Disease, but more longitudinal studies are needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  )
}
