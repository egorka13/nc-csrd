export const template = function () {
    let ticket = this.props.ticket;
    return {
        tagName: 'div',
        classList: ['ticket'],
        attributes: {
            'data-ticket': ticket.id
        },
        children: [
            {
                tagName: 'div',
                classList: ['ticket__col'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['ticket__text'],
                        textContent: ticket.comment ? ticket.comment : '---',
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['ticket__col'],
                children: [
                    {
                        tagName: 'span',
                        classList: ['ticket__text', '_type'],
                        attributes: {
                            style: `background: ${this.methods.getTypeColor(ticket.type)}`
                        },
                        events: {
                            onclick: this.methods.filterByType.bind(this)
                        },
                        textContent: ticket.type ? ticket.type : '---',
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['ticket__col'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['ticket__text'],
                        textContent: ticket.dateOfCreation ? ticket.dateOfCreation : '---',
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['ticket__col'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['ticket__text'],
                        textContent: ticket.closingDate ? ticket.closingDate : '---',
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['ticket__col'],
                children: [
                    {
                        tagName: 'span',
                        classList: ['ticket__text', '_status'],
                        attributes: {
                            style: `background: ${this.methods.getStatusColor(ticket.status)}`
                        },
                        events: {
                            onclick: this.methods.filterByStatus.bind(this)
                        },
                        textContent: ticket.status ? ticket.status : '---',
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['ticket__col', 'ticket__dots'],
                children: [
                    {
                        tagName: 'i',
                        classList: ['fas', 'fa-ellipsis-v'],
                    }
                ]
            },
            {
                tagName: 'div',
                classList: ['ticket__dropdown', 'card'],
                children: [
                    {
                        tagName: 'div',
                        classList: ['ticket__dropdown-item'],
                        events: {
                            onclick: this.props.modifyHandler
                        },
                        textContent: 'Modify'
                    },
                    {
                        if: this.props.reopenHandler,
                        tagName: 'div',
                        classList: ['ticket__dropdown-item'],
                        events: {
                            onclick: this.props.reopenHandler
                        },
                        textContent: 'Reopen'
                    },
                    {
                        if: this.props.cancelHandler,
                        tagName: 'div',
                        classList: ['ticket__dropdown-item'],
                        events: {
                            onclick: this.props.cancelHandler
                        },
                        textContent: 'Cancel'
                    }
                ]
            }
        ]
    }
}
