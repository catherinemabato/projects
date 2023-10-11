import Container from '../layout/Container'
import Heading from '../typography/Heading'
import Paragraph from '../typography/Paragraph'

function OtherFormsComponent() {
    return (
        <div>
            <div className="grid lg:grid-cols-9 lg:gap-8 lg:text-center bg-[#F5F5F5]">
                <div className="col-start-2 col-span-7 my-12">
                    <div className="mx-2">
                        <Heading className="mt-10 mb-5 mx-3 text-base">
                            Other Forms Of Financial Support
                        </Heading>
                        <Paragraph typeStyle="body-md" className="mb-3 max-w-4xl mx-auto text-center text-darkGunMetal">
                            You can also support AsyncAPI initiative by getting<br></br> involved through employment, providing services and<br></br> organizing events
                        </Paragraph>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 mx-3">

                        <div className="bg-white rounded-md shadow-md p-4 flex items-center">
                            <div className="text-darkGunMetal">
                                <div className="flex flex-col items-center">
                                    <img src="/img/illustrations/EmployeeInvolvement.webp" alt="Employee involvement" className="w-1/6 h-auto object-cover rounded-md m-2" />
                                    <h2 className="text-lg font-semibold my-2">Employee involvement</h2>
                                </div>
                                <p className="text-sm text-darkGunMetal">Assign your employees to contribute to projects under the AsyncAPI Initiative
                                    on a regular basis, and we'll welcome them as new maintainers. You can
                                    also provide direct assistance to a member of the <span className="text-[#805CDA] font-semibold">Technical Steering Committee</span>(TSC) through contracts or employment for specific tasks.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-md shadow-md p-4 flex items-center">
                            <div className="text-darkGunMetal">
                                <div className="flex flex-col items-center">
                                    <img src="/img/illustrations/EventOrganization.webp" alt="Event organization" className="w-1/6 h-auto object-cover rounded-md m-2" />
                                    <h2 className="text-lg font-semibold my-2">Event organization</h2>
                                </div>
                                <p className="text-sm text-darkGunMetal">Host AsyncAPI conferences by sponsoring and organizing events under the AsyncAPI
                                    brand at your provided venue.</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-md shadow-md p-4 flex items-center">
                            <div className="text-darkGunMetal">
                                <div className="flex flex-col items-center">
                                    <img src="/img/illustrations/ServiceProvision.webp" alt="Service provision" className="w-1/6 h-auto object-cover rounded-md m-2" />
                                    <h2 className="text-lg font-semibold my-2">Service provision</h2>
                                </div>
                                <p className="text-sm text-darkGunMetal">AsyncAPI Initiative relies on numerous tools, many of which incur costs. Your
                                    organization can provide services such as hosting or storage to support our efforts.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherFormsComponent