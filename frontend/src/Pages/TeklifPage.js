import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import { signup } from '../api/ApiCalls';
import Input from "../components/Input";
import { withApiProgress } from "../shared/ApiProgress";
class DaskPage extends React.Component {
    state = {
        selected: null,
        tc: null
    }


    onChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    onChangePage = event => {
        const { name, value } = event.target;
        let inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
        this.setState({
            [name]: value,

        });
    }






    render() {
        let Page = null
        if (this.state.selected === "1" || this.state.selected === "2") {
            Page = <div className="container w-75 p-3">
                <label className="form-label">TC Kimlik Numarası</label>
                <div class="input-group mb-3"  >
                    <input name="tc" onChange={this.onChange} type="text" class="form-control" />
                </div>

                <label className="form-label">Cep Telefonu</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" >+90</span>
                    <input type="text" class="form-control" />

                </div>

                <label class="form-label">Doğum Tarihi</label>
                <div class="input-group mb-3">
                    <input type="date" class="form-control" />
                </div>

                <label class="form-label">Email Adresi</label>
                <div class="input-group mb-3">
                    <input type="email" class="form-control" />
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" >
                        Kişisel Verilerin İşlenmesi Hakkında Aydınlatma Metnini okudum.
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" >
                        Ticari Elektronik İleti Gönderimi İçin Kişisel Verilerin İşlenmesine Yönelik Aydınlatma Metnini okudum.                     </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""  />
                    <label class="form-check-label" >
                        Ticari Elektronik İleti gönderilmesini kabul ediyorum.
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value=""  />
                    <label class="form-check-label" >
                        Kullanıcı Sözleşmesi ve Gizlilik Politikasını okudum ve onaylıyorum.
                    </label>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Teklif Al</button>
                </div>

            </div>
        }

        if (this.state.selected === "3") {
            Page = <div className="container w-75 p-3">
                <label className="form-label">TC Kimlik Numarası</label>
                <div class="input-group mb-3"  >
                    <input defaultValue={""} type="text" class="form-control" />
                </div>


                <label className="form-label">Cep Telefonu</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" >+90</span>
                    <input type="text" class="form-control" />

                </div>

                <label class="form-label">Doğum Tarihi</label>
                <div class="input-group mb-3">
                    <input type="date" class="form-control" />
                </div>

                <label class="form-label">Email Adresi</label>
                <div class="input-group mb-3">
                    <input type="email" class="form-control" />
                </div>

                <label class="form-label">Poliçe Durumu</label>
                <select class="form-select mb-3" >
                    <option selected>Yenileme</option>
                    <option value="1">İkinci El Yeni Araç (İlk Poliçe)</option>
                    <option value="2">Sıfır Km Araç (İlk Poliçe)</option>

                </select>

                <label class="form-label">Araç Plakası</label>
                <div class="input-group mb-3">
                    <input type="email" class="form-control" />
                </div>



                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" >
                        Kişisel Verilerin İşlenmesi Hakkında Aydınlatma Metnini okudum.
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" >
                        Ticari Elektronik İleti Gönderimi İçin Kişisel Verilerin İşlenmesine Yönelik Aydınlatma Metnini okudum.                     </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""  />
                    <label class="form-check-label" >
                        Ticari Elektronik İleti gönderilmesini kabul ediyorum.
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value=""  />
                    <label class="form-check-label" >
                        Kullanıcı Sözleşmesi ve Gizlilik Politikasını okudum ve onaylıyorum.
                    </label>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Teklif Al</button>
                </div>

            </div>

        }

        if (this.state.selected === "4") {
            Page = <div className="container w-75 p-3">
                <label className="form-label">TC Kimlik Numarası</label>
                <div class="input-group mb-3"  >
                    <input type="text" class="form-control" />
                </div>

                <label className="form-label">Cep Telefonu</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" >+90</span>
                    <input type="text" class="form-control" />

                </div>

                <label class="form-label">Doğum Tarihi</label>
                <div class="input-group mb-3">
                    <input type="date" class="form-control" />
                </div>

                <label class="form-label">Email Adresi</label>
                <div class="input-group mb-3">
                    <input type="email" class="form-control" />
                </div>

                <label class="form-label">Araç Plakası</label>
                <div class="input-group mb-3">
                    <input type="email" class="form-control" />
                </div>



                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" >
                        Kişisel Verilerin İşlenmesi Hakkında Aydınlatma Metnini okudum.
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" />
                    <label class="form-check-label" >
                        Ticari Elektronik İleti Gönderimi İçin Kişisel Verilerin İşlenmesine Yönelik Aydınlatma Metnini okudum.                     </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value=""  />
                    <label class="form-check-label" >
                        Ticari Elektronik İleti gönderilmesini kabul ediyorum.
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" value=""  />
                    <label class="form-check-label" >
                        Kullanıcı Sözleşmesi ve Gizlilik Politikasını okudum ve onaylıyorum.
                    </label>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Teklif Al</button>
                </div>

            </div>
        }







        return (
            <div className="container w-50 p-3">
                <div class="form-floating mb-3">
                    <select onChange={this.onChangePage} name="selected" class="form-select mb-3" id="floatingSelect" aria-label="Floating label select example">
                        <option selected></option>
                        <option value="1">Dask Sigortası</option>
                        <option value="2">Seyahat Sağlık Sigortası</option>
                        <option value="3">Trafik Sigortası</option>
                        <option value="4">Kasko Sigortası</option>
                    </select>
                    <label for="floatingSelect">Teklif Almak İstediğiniz Sigorta Türünü Seçiniz</label>
                </div>

                {Page}

            </div>
        );
    }
}


export default DaskPage;