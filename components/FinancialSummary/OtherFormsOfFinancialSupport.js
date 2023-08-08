import Container from '../layout/Container'
import Heading from "../typography/Heading"
import Paragraph from '../typography/Paragraph'

function OtherFormsOfFinancialSupport() {
    return (
        <Container wide>
            <div className="flex flex-wrap lg:justify-center lg:items-start my-8">
                <div className="flex sm:flex-col gap-2 flex-row">
                    <img className="mx-2 hidden lg:block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/800px-Square_-_black_simple.svg.png" alt="Image 1" width="150px" height="150px" />
                    <img className="mx-2 hidden lg:block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/800px-Square_-_black_simple.svg.png" alt="Image 2" width="150px" height="150px" />
                    <img className="mx-2 hidden lg:block" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/800px-Square_-_black_simple.svg.png" alt="Image 3" width="150px" height="150px" />
                </div>


                <div className="flex flex-col gap-4 max-w-4xl lg:w-3/5">
                    <div className="my-2">
                        <Heading level="h1" typeStyle="heading-md">Other forms of financial support</Heading>
                    </div>

                    <div className="my-2">
                        <Heading level="h2" typeStyle="heading-sm">Employee involvement</Heading>
                        <Paragraph typeStyle="body-md" className="my-2">
                            Assign your employees to contribute to projects under the AsyncAPI Initiative
                            on a regular basis, and we'll welcome them as new maintainers. You can
                            also provide direct assistance to a member of the Technical Steering Committee
                            (TSC) through contracts or employment for specific tasks.
                        </Paragraph>
                    </div>

                    <div className="my-2">
                        <Heading level="h2" typeStyle="heading-sm">Event organization</Heading>
                        <Paragraph typeStyle="body-md" className="my-2">
                            Host AsyncAPI conferences by sponsoring and organizing events under the AsyncAPI
                            brand at your provided venue.
                        </Paragraph>
                    </div>

                    <div className="my-2">
                        <Heading level="h2" typeStyle="heading-sm">Service provision</Heading>
                        <Paragraph typeStyle="body-md" className="my-2">
                            AsyncAPI Initiative relies on numerous tools, many of which incur costs. Your
                            organization can provide services such as hosting or storage to support our efforts.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default OtherFormsOfFinancialSupport