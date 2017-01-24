import { Component, Input, OnInit }     from "@angular/core";
import { Router }                       from "@angular/router";
import { AgGridModule }                  from "ag-grid-ng2/main";

import { User }         from "./user";
import { UserService}   from "./user.service";

@Component({
    selector: 'form-user',
    templateUrl: './app/user/user-list.component.html',
    providers: [UserService]
})

export class UserListComponent implements OnInit {
    users: User[];

    public rowCount:string;
    public showGrid:boolean;
    private columnDefs:any[];
    private gridOptions:AgGridModule;

    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.gridOptions = <AgGridModule>{};
        this.createColumnDefs();
        this.showGrid = true;
    }

    private createColumnDefs() {
        this.columnDefs = [
            {
                headerName: "Id",
                field: "id",
                editable:true,
                colId: "id",
                width: 70
            },
            {
                headerName: "First Name",
                field: "firstName",
                editable:true,
                colId: "firstName",
                width: 250
            },
            {
                headerName: "Last Name",
                field: "lastName",
                editable:true,
                colId: "firstName",
                width: 250
            },
            {
                headerName: "E-mail",
                field: "email",
                editable:true,
                colId: "email",
                width: 450
            },
            {
                headerName: "Action",
                width: 70,
                template: `<a class="button" data-action-type="edit" aria-label="Skip to main navigation">
                                <i data-action-type="edit" class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </a>
                            <a class="button" data-action-type="remove" aria-label="Delete">
                                <i  data-action-type="remove" class="fa fa-trash-o" aria-hidden="true"></i>
                            </a>
                            `
            },
        ];
    }

    ngOnInit(): void {
        this.getUsers();
    }

    getUsers(): void {
        this.userService.getUsers().then(users => this.users = users);
    }

    goToDetail(id: number): void {
        this.router.navigate(['/cadastro', id]);
    }

    public onRowClicked(e) {
        if (e.event.target !== undefined) {
            let data = e.data;
            let actionType = e.event.target.getAttribute("data-action-type");

            switch (actionType) {
                case "edit":
                    return this.goToDetail(data.id);
                case "remove":
                    console.log(data.id + " remove ");
            }
        }
    }
}