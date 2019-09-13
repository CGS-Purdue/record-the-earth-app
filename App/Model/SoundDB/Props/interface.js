


// commmand           QueryStatement                      database    cb
insert(record) {this._transact(statements.insert      , record,  this.txSuccess, this.txError); }
delete(id)     {this._transact(statements.delete      , id,      this.txSuccess, this.txError); }
select(id)     {this._transact(statements.select      , id,      this.txSuccess, this.txError); }
pidUpdate(id)  {this._transact(statements.pidUpdate   , id,      this.txSuccess, this.txError); }
create()       {this._transact(statements.create      , null,    this.txSuccess, this.txError); }
dropTable()    {this._transact(statements.drop        , null,    this.txSuccess, this.txError); }
all()          {this._transact(statements.all         , null,    this.txSuccess, this.txError); }
