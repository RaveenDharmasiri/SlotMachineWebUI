package controllers;

import play.mvc.Controller;
import play.mvc.Result;

import views.html.SlotMachine.*;

public class SlotMachineController extends Controller {

    public Result displayPage(){
        return ok(MainPage.render());
    }

    public Result stat(){
        return ok(Statistics.render());
    }

}
