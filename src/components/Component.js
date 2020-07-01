import React from "react";
import "./styles.css";
import {
  Carousel,
  Card,
  Col,
  Row,
  Table,
  Form,
  Button,
  FormLabel
} from "react-bootstrap";

class Component extends React.Component {
  render() {
    let data = this.props.data;

    return (
      <>
        <div className="row justify-content-center">
          <div className=" mycomponent col ">
            <div className="card wallpaper row">
              <img
                className="card-img-top col "
                src={data.card_banner}
                alt="/"
              />
            </div>
            <div className="img-brand row">
              <img
                className="card-img rounded-circle "
                src={data.card_solar}
                alt="/"
              />
            </div>
            <div className="medalha rounded-cicle ">
              <img
                className="card-img-top rounded-circle img-medalha "
                src={data.card_pin}
                alt="/"
              />
            </div>
            <div className="card-body ">
              <p className="text_ilustration">
                {data.card_text.map(function(row, index) {
                  return (
                    <div key={index}>
                      <p className="row-structure">
                        {row.title}
                        <a
                          href={row.link}
                          target="#row.target"
                          style={{ color: row.color }}
                        >
                          {row.description}
                        </a>
                        <hr />
                      </p>
                    </div>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
        <br />
        <main>
          <Carousel>
            {data.carrousel.map((row, index) => {
              return (
                <Carousel.Item key={index}>
                  <a href={row.link} target={row.target}>
                    <img
                      className="d-block w-100"
                      src={row.image}
                      alt="Third slide"
                    />
                  </a>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </main>
        <br />
        <br />
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-4">
            {" "}
            {data.card_image.map((row, index) => {
              return (
                <>
                  <a
                    href={row.link}
                    target={row.target}
                    key={index}
                    className="col-3"
                  >
                    <img src={row.image} alt="" className=" img-fluid" />
                  </a>
                  <div className="trace col-6" />

                  {data.card_image2.map((row, index) => {
                    return (
                      <a
                        href={row.link}
                        target={row.target}
                        key={index}
                        className="col-3"
                      >
                        <img src={row.image} alt="" className="img img-fluid" />
                      </a>
                    );
                  })}
                </>
              );
            })}
          </div>

          <div className="d-flex justify-content-between styles align-items-center">
            <p className="description col-3">{data.description}</p>
            <p className="description col-3">{data.description2}</p>
          </div>
        </div>
        <br />
        <div className="container">
          <Card className="text-center">
            <Card.Title className="py-2">
              {data.card_description.map((row, index) => {
                return (
                  <>
                    <h3 style={{ color: row.color }} key={index}>
                      {row.description}
                    </h3>
                    <hr />
                  </>
                );
              })}
            </Card.Title>

            <Card.Body className="d-flex justify-content-between">
              {data.card_demonstrative.map((row, index) => {
                return (
                  <>
                    <div className="col-md-3" key={index}>
                      <Card.Img
                        alt=""
                        src=""
                        style={{ color: row.iconColor }}
                        className={row.image}
                      />
                      <Card.Title className="py-3" style={{ color: row.color }}>
                        {row.title}
                      </Card.Title>

                      <Card.Text style={{ font: row.font, color: "#009cd5" }}>
                        {row.description}
                      </Card.Text>
                      <br />
                    </div>

                    <div className="dividers" />
                  </>
                );
              })}
            </Card.Body>
          </Card>
        </div>
        <br />
        <Row>
          {data.card_people.map((row, index) => {
            return (
              <>
                <Col lg={4}>
                  <Card
                    style={{ borderColor: "row.border" }}
                    key={index}
                    className="card"
                  >
                    <Card.Header
                      style={{ background: row.background, color: row.color }}
                      className="d-flex "
                    >
                      <img alt="" src="" className={row.image} />
                      <div className=" text-center">
                        <h5 className="mx-4 ">{row.header}</h5>

                        <p>{row.h_description}</p>
                        <div className="icon rounded-circle">
                          <a href={row.link} target={row.target}>
                            <img src="" alt="" className={row.icon} />
                          </a>
                        </div>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <h4>{row.title}</h4>
                        <h4>{row.title1}</h4>
                      </div>
                      <Card.Text className="d-flex justify-content-between m-4">
                        <p>{row.description}</p>
                        <p>{row.description2}</p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
        <br />
        <div className="container">
          <Card className="text-center">
            <Card.Body className="d-flex justify-content-between">
              {data.card_demonstrative2.map((row, index) => {
                return (
                  <>
                    <div className="col-md-3" key={index}>
                      <Card.Img
                        alt=""
                        src=""
                        style={{ color: row.iconColor }}
                        className={row.image}
                      />
                      <Card.Title className="py-3" style={{ color: row.color }}>
                        {row.title}
                      </Card.Title>

                      <Card.Text style={{ font: row.font, color: "#009cd5" }}>
                        {row.description}
                      </Card.Text>
                      <br />
                    </div>

                    <div className="dividers" />
                  </>
                );
              })}
            </Card.Body>
          </Card>
        </div>
        <br /> <br />
        {data.card_result.map((row, index) => (
          <div className="card-box" key={index}>
            <div style={{ color: row.color, font: row.font }}>{row.title}</div>
            <div className="d-flex row">
              <div className="col-4" />
              <div className="col-8">
                <img src={row.image} alt="" className="img-fluid" />
              </div>
            </div>
            <div
              className="d-flex row align-items-center py-3"
              style={{ background: row.background }}
            >
              <div className="col-4">{row.description}</div>
              <div
                className="col-8 d-flex justify-content-around"
                style={{ color: row.colorNumber }}
              >
                <div>{row.membros} </div>
                <div>{row.membros} </div>
                <div>{row.membros} </div>
                <div>{row.membros} </div>
                <div>{row.membros} </div>
                <div>{row.membros} </div>
              </div>
            </div>
            <br />
            <div className="d-flex row align-items-center">
              <div className="col-4">{row.description2}</div>
              <div
                className="col-8 d-flex justify-content-around"
                style={{ color: row.color }}
              >
                <div>{row.membros} </div>
                <div>{row.membros} </div>
                <div>{row.membros} </div>
                <div>{row.membros} </div>
                <div>{row.membros} </div>
                <div>{row.membros} </div>
              </div>
            </div>
          </div>
        ))}
        <div className="container">
          <h6 className="py-2">Painel de Análise Matricial</h6>
          <Table bordered hover responsive>
            <>
              <thead className="text-center ">
                <tr>
                  {data.theader.map((row, index) => (
                    <th
                      style={{
                        height: "50px",
                        background: row.background,
                        color: row.color
                      }}
                    >
                      {row.title}
                    </th>
                  ))}
                </tr>
              </thead>
            </>

            <>
              <tbody className="text-center hover">
                {data.tbody.map(itemA => (
                  <tr className="striped hover">
                    {itemA.map(itemB => {
                      return <td>{itemB}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </>
          </Table>
        </div>
        <br /> <br />
        <>
          {data.footer.map(row => (
            <footer
              className="d-flex py-3 justify-content-end container-fluid"
              style={{ background: row.background }}
              ket={row}
            >
              <div>
                <a
                  target={row.target}
                  href={row.link}
                  style={{ color: row.color }}
                >
                  <img src={row.logo} alt="" className="px-3" />
                </a>
              </div>
            </footer>
          ))}
        </>
        <br />
        <br />
        <div className="container">
          <div className="d-flex col-lg-12 pt-4">
            {data.register.map(row => (
              <a
                href={row.link}
                target={row.target}
                key={row}
                className="d-flex"
                style={{ color: row.color }}
              >
                <img src={row.image} alt="" className={row.image} />
                <h6 className="pt-2 mx-3">{row.description}</h6>
              </a>
            ))}
            <div className="blue" />
          </div>
          <hr />
          <Form>
            <Form.Row>
              {data.form.map(row => (
                <>
                  <Form.Group
                    as={Col}
                    controlId="formGridEmail"
                    lg
                    key={row}
                    style={{ color: row.color }}
                  >
                    <Form.Label>{row.label}</Form.Label>

                    <Form.Control
                      type={row.type}
                      placeholder={row.placeholder}
                      style={{ background: row.background }}
                    />
                  </Form.Group>
                </>
              ))}
            </Form.Row>

            <Form.Group as={Row} controlId="formPlaintextPassword">
              {data.formLabel.map(row => (
                <>
                  <Form.Label
                    column
                    md="3"
                    className=""
                    style={{ color: row.color }}
                    key={row}
                  >
                    {row.label}

                    <p>{row.description}</p>
                  </Form.Label>
                </>
              ))}
              {data.formInput.map(row => (
                <>
                  <Col sm="6" style={{ color: row.color }} key={row}>
                    <FormLabel>{row.label}</FormLabel>
                    <Form.Control
                      type="email"
                      placeholder={row.placeholder}
                      style={{ background: row.background }}
                    />
                  </Col>
                </>
              ))}
            </Form.Group>

            <Form.Row>
              {data.form1.map(row => (
                <>
                  <Form.Group
                    as={Col}
                    controlId="formGridEmail"
                    lg
                    key={row}
                    style={{ color: row.color }}
                  >
                    <Form.Label>{row.label}</Form.Label>

                    <Form.Control
                      type={row.type}
                      placeholder={row.placeholder}
                      style={{ background: row.background }}
                    />
                  </Form.Group>
                </>
              ))}
            </Form.Row>

            <Form.Row>
              {data.form2.map(row => (
                <>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>{row.label}</Form.Label>
                    <Form.Control as="select" value="Choose...">
                      <option>{row.option}</option>
                      <option>{row.option1}</option>
                      <option>{row.option2}</option>
                      <option>{row.option3}</option>
                    </Form.Control>
                  </Form.Group>
                </>
              ))}
            </Form.Row>

            {data.formText.map(row => (
              <>
                <Form.Group
                  as={Row}
                  controlId="formHorizontalPassword"
                  className="d-flex justify-content-between"
                >
                  <Form.Label column md={4}>
                    {row.label}
                  </Form.Label>
                  <Col md={8}>
                    <Form.Control
                      type={row.type}
                      placeholder={row.placeholder}
                    />
                  </Col>
                </Form.Group>
              </>
            ))}

            <div className="d-flex justify-content-end">
              {data.button.map(row => (
                <Button
                  type={row.type}
                  style={{ background: row.background, color: row.color }}
                  size="lg"
                  key={row}
                >
                  {row.description}
                </Button>
              ))}
            </div>
          </Form>
        </div>
      </>
    );
  }
}

export default Component;
